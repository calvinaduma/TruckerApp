import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerAdmin = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Admin, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly phone_number?: string | null;
  readonly image_url?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAdmin = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Admin, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly phone_number?: string | null;
  readonly image_url?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Admin = LazyLoading extends LazyLoadingDisabled ? EagerAdmin : LazyAdmin

export declare const Admin: (new (init: ModelInit<Admin>) => Admin) & {
  copyOf(source: Admin, mutator: (draft: MutableModel<Admin>) => MutableModel<Admin> | void): Admin;
}

type EagerSponsor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Sponsor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly image_url?: string | null;
  readonly drivers?: (string | null)[] | null;
  readonly username?: string | null;
  readonly email?: string | null;
  readonly phone_number?: string | null;
  readonly company?: string | null;
  readonly password?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySponsor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Sponsor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly image_url?: string | null;
  readonly drivers?: (string | null)[] | null;
  readonly username?: string | null;
  readonly email?: string | null;
  readonly phone_number?: string | null;
  readonly company?: string | null;
  readonly password?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Sponsor = LazyLoading extends LazyLoadingDisabled ? EagerSponsor : LazySponsor

export declare const Sponsor: (new (init: ModelInit<Sponsor>) => Sponsor) & {
  copyOf(source: Sponsor, mutator: (draft: MutableModel<Sponsor>) => MutableModel<Sponsor> | void): Sponsor;
}

type EagerDriver = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Driver, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nam?: string | null;
  readonly username?: string | null;
  readonly email?: string | null;
  readonly phone_number?: string | null;
  readonly sponsor?: (string | null)[] | null;
  readonly image_url?: string | null;
  readonly points?: string | null;
  readonly password?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDriver = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Driver, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nam?: string | null;
  readonly username?: string | null;
  readonly email?: string | null;
  readonly phone_number?: string | null;
  readonly sponsor?: (string | null)[] | null;
  readonly image_url?: string | null;
  readonly points?: string | null;
  readonly password?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Driver = LazyLoading extends LazyLoadingDisabled ? EagerDriver : LazyDriver

export declare const Driver: (new (init: ModelInit<Driver>) => Driver) & {
  copyOf(source: Driver, mutator: (draft: MutableModel<Driver>) => MutableModel<Driver> | void): Driver;
}

type EagerProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly image_url?: string | null;
  readonly price?: number | null;
  readonly number_of_items?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly image_url?: string | null;
  readonly price?: number | null;
  readonly number_of_items?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Product = LazyLoading extends LazyLoadingDisabled ? EagerProduct : LazyProduct

export declare const Product: (new (init: ModelInit<Product>) => Product) & {
  copyOf(source: Product, mutator: (draft: MutableModel<Product>) => MutableModel<Product> | void): Product;
}