<!-- docs/.vitepress/components/ExternalContent.vue -->
<template>
    <div v-if="loading" class="loading">Loading content...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else v-html="filteredContent" class="content"></div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'

  const props = defineProps<{
    url: string,
    selector: string
  }>();

  
  const loading = ref(true)
  const error = ref<string | null>(null)
  const filteredContent = ref<string | null>(null)
  
  const fetchAndFilterContent = async () => {
    try {
      const response = await fetch(props.url, { method: 'GET', mode: 'cors' })
      if (!response.ok) throw new Error(`Failed to load content: ${response.statusText}`)
      
      // Parse the HTML response
      const parser = new DOMParser()
      const htmlDocument = parser.parseFromString(await response.text(), 'text/html')
      const element = htmlDocument.querySelector(props.selector)
      
      // Remove all anchor tags and keep only the inner text
      if (element) {
        element.querySelectorAll('a').forEach(anchor => {
          anchor.replaceWith(anchor.textContent || '')
        })
        filteredContent.value = element.innerHTML
      } else {
        filteredContent.value = `<p>Content not found</p>`
      }
    } catch (err) {
      error.value = 'Failed to load content. Please try again later.'
      console.error('Error fetching content:', err)
    } finally {
      loading.value = false
    }
  }
  
  onMounted(() => fetchAndFilterContent())
  </script>
  
  <style scoped>
  .loading, .error, .content {
    padding: 1em;
    font-family: Arial, sans-serif;
  }
  .loading {
    color: #888;
  }
  .error {
    color: red;
  }
  .content {
    /* Optional styling for the content area */
  }
  </style>
  