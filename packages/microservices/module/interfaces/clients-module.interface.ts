import { ClientOptions, CustomClientOptions } from '../../interfaces';
import { Type, Provider, ModuleMetadata } from '@nestjs/common/interfaces';

export type ClientProvider = ClientOptions | CustomClientOptions;

export type ClientProviderOptions = ClientProvider & {
  name: string | symbol;
};

export interface ClientsModuleOptions {
  providers: Array<ClientProviderOptions>;
  /**
   * If "true', register `ClientsModule` as a global module.
   */
  isGlobal?: boolean;
}

export interface ClientsModuleOptionsFactory {
  createClientOptions(): Promise<ClientProvider> | ClientProvider;
}

export interface ClientsProviderAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  useExisting?: Type<ClientsModuleOptionsFactory>;
  useClass?: Type<ClientsModuleOptionsFactory>;
  useFactory?: (...args: any[]) => Promise<ClientProvider> | ClientProvider;
  inject?: any[];
  extraProviders?: Provider[];
  name: string | symbol;
}

export interface ClientsModuleAsyncOptions {
  providers: Array<ClientsProviderAsyncOptions>;
  /**
   * If "true', register `ClientsModule` as a global module.
   */
  isGlobal?: boolean;
}
