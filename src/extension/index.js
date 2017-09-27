const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    mutation.addedNodes.forEach(node => {
      if (node.id === 'init-data') {
        const data = JSON.parse(node.value)
        Object.assign(data.deciders, {
          cramming_feature_enabled: true,
          cramming_ui_enabled: true
        })
        node.value = JSON.stringify(data)
        observer.disconnect()
      }
    })
  })
})

observer.observe(document, { childList: true, subtree: true })
