# @lochner/ipfs-verification-widget

Embeddable Node/CommonJS module that renders an IPFS/Git publication verification footer widget for static sites.

## Install

From a sibling `lochner.tech` checkout during local development:

```sh
cd /workspace/lochner.tech
npm install ../IPFSVerifier/ipfs-verification-widget
```

Or use any absolute/relative path to this package directory:

```sh
npm install /absolute/path/to/IPFSVerifier/ipfs-verification-widget
```

## Usage

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

For ES module projects, import the CommonJS default export and destructure it:

```js
import ipfsVerificationWidget from '@lochner/ipfs-verification-widget';

const { createSharedFooterTemplate } = ipfsVerificationWidget;
```

The returned HTML includes the widget markup, styles, and browser-side verification script.

## Options

- `domainName` - displayed in the verification status copy.
- `ipnsId` - IPNS name used to build default public gateway URLs.
- `githubRawManifestUrl` - raw `ipfs-version.json` URL used during verification.
- `githubMainCommitApiUrl` - GitHub API URL for the publication branch commit.
- `manifestPath` - manifest path on the published site. Defaults to `ipfs-version.json`.
- `verificationNotBeforePath` - optional delay timestamp path. Defaults to `ipfs-verification-not-before.txt`.
- `publicIpfsGateways` - array of `{ label, siteUrl, manifestUrl? }` gateways. Defaults to several public IPNS gateways for `ipnsId`.
- `publicGatewayCheckerUrl` - link target for gateway checker.
- `footerCredit` - copyright footer text after the year.
