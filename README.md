# IPFSVerifier

Verifies frontend code with IPFS, Git, and SHA-256 manifests.

This repository currently ships the reusable footer widget as the Node package in
[`ipfs-verification-widget`](./ipfs-verification-widget).

## Use in the lochner.tech Node project

From your `lochner.tech` project, install the package from a local checkout while developing:

```sh
npm install /absolute/path/to/IPFSVerifier/ipfs-verification-widget
```

For example, if both repositories live under `/workspace`:

```sh
cd /workspace/lochner.tech
npm install ../IPFSVerifier/ipfs-verification-widget
```

Then render the footer from your Node build/server code:

```js
const { createSharedFooterTemplate } = require('@lochner/ipfs-verification-widget');

const footerHtml = createSharedFooterTemplate(new Date().getFullYear(), {
  domainName: 'lochner.tech',
  ipnsId: 'k2k4r8jw4dtnalpkgklrqeflhsgderg6a8wn5lix7bww1yjemm0rx7ye',
  githubRawManifestUrl: 'https://raw.githubusercontent.com/nicholelochner/lochner.tech_apparel/main/ipfs-version.json',
  githubMainCommitApiUrl: 'https://api.github.com/repos/nicholelochner/lochner.tech_apparel/commits/main',
  footerCredit: 'Lochner Technology · Minneapolis, MN',
});

// Inject footerHtml into your layout/template near the end of <body>.
```

If your project uses ES modules, import the CommonJS package like this:

```js
import ipfsVerificationWidget from '@lochner/ipfs-verification-widget';

const { createSharedFooterTemplate } = ipfsVerificationWidget;
```

## Package contents

- `createSharedFooterTemplate(year, options)` returns complete footer HTML with
  widget markup, CSS, and browser-side verification JavaScript.
- TypeScript declarations are included for editor autocomplete when the package
  is consumed from JavaScript or TypeScript projects.
