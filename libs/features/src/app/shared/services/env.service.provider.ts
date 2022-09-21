import { EnvService } from '@shared/services/env.service';

export const EnvServiceFactory = () => {
  let env = new EnvService();
  const browserWindowEnv = (window as any).__env || {};
  for (const key in browserWindowEnv) {
    if (Object.prototype.hasOwnProperty.call(browserWindowEnv, key)) {
      env[key] = (window as any).__env[key];
    }
  }

  return env;
};

export const EnvServiceProvider = {
  provide: EnvService,
  useFactory: EnvServiceFactory,
  deps: [],
};
