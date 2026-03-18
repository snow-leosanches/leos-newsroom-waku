// deno-fmt-ignore-file
// biome-ignore format: generated types do not need formatting
// prettier-ignore
import type { PathsForPages, GetConfigResponse } from 'waku/router';

// prettier-ignore
import type { getConfig as File_About_getConfig } from './pages/about';
// prettier-ignore
import type { getConfig as File_Directory_getConfig } from './pages/directory';
// prettier-ignore
import type { getConfig as File_Feed_getConfig } from './pages/feed';
// prettier-ignore
import type { getConfig as File_Index_getConfig } from './pages/index';
// prettier-ignore
import type { getConfig as File_Monitoring_getConfig } from './pages/monitoring';
// prettier-ignore
import type { getConfig as File_SignIn_getConfig } from './pages/sign-in';

// prettier-ignore
type Page =
| ({ path: '/about' } & GetConfigResponse<typeof File_About_getConfig>)
| ({ path: '/directory' } & GetConfigResponse<typeof File_Directory_getConfig>)
| ({ path: '/feed' } & GetConfigResponse<typeof File_Feed_getConfig>)
| ({ path: '/' } & GetConfigResponse<typeof File_Index_getConfig>)
| ({ path: '/monitoring' } & GetConfigResponse<typeof File_Monitoring_getConfig>)
| ({ path: '/sign-in' } & GetConfigResponse<typeof File_SignIn_getConfig>);

// prettier-ignore
declare module 'waku/router' {
  interface RouteConfig {
    paths: PathsForPages<Page>;
  }
  interface CreatePagesConfig {
    pages: Page;
  }
}
