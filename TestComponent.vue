<template></template>

<script>
export default {
  watch: {
    $mq() {
      console.log('You will see me, if watcher is working');
      window.removeEventListener('scroll', this.resizeHeader);
    }
  }
}
</script>