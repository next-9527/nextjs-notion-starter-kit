module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '41f134ec58544aefa19c07096937ed25',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'LockHeart的博客',
  domain: 'np.lockworld.cn',
  author: 'Lock Heart',

  // open graph metadata (optional)
  description: '记录一些个人的小杂感。',
  socialImageTitle: 'LockHeart的博客',
  socialImageSubtitle: '欢迎光临! 👋',

  // social usernames (optional)
  twitter: 'next_9527',
  github: 'next-9527',
  linkedin: '',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,
  
    
  // Utteranc.es comments via GitHub issue comments (optional)
<script src="https://utteranc.es/client.js"
        repo="next-9527 / nextjs-notion-starter-kit"
        issue-term="pathname"
        theme="icy-dark"
        crossorigin="anonymous"
        async>
</script>

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null
}
