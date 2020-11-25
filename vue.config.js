module.exports = {
  devServer: {
    proxy: 'http://k8s-awsdev.silot.tech:30174/'
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            // 'primary-color': '#1DA57A',
            // 'link-color': '#1DA57A',
            // 'border-radius-base': '2px'
          },
          javascriptEnabled: true
        }
      }
    }
  }
}
