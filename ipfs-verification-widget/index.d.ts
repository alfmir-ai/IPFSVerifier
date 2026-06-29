export interface PublicIpfsGateway {
  label: string;
  siteUrl: string;
  manifestUrl?: string;
}

export interface SharedFooterTemplateOptions {
  githubRawManifestUrl?: string;
  githubMainCommitApiUrl?: string;
  manifestPath?: string;
  domainName?: string;
  ipnsId?: string;
  publicGatewayCheckerUrl?: string;
  verificationNotBeforePath?: string;
  footerCredit?: string;
  publicIpfsGateways?: PublicIpfsGateway[];
}

export function createSharedFooterTemplate(
  copyrightYear: string | number,
  options?: SharedFooterTemplateOptions
): string;
