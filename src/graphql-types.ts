import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  numeric: any;
  timestamptz: any;
  uuid: any;
};

/** columns and relationships of "SensorValue" */
export type SensorValue = {
  __typename?: 'SensorValue';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  key: Scalars['String'];
  timestamp: Scalars['timestamptz'];
  updated_at: Scalars['timestamptz'];
  value: Scalars['numeric'];
};

/** aggregated selection of "SensorValue" */
export type SensorValue_Aggregate = {
  __typename?: 'SensorValue_aggregate';
  aggregate?: Maybe<SensorValue_Aggregate_Fields>;
  nodes: Array<SensorValue>;
};

/** aggregate fields of "SensorValue" */
export type SensorValue_Aggregate_Fields = {
  __typename?: 'SensorValue_aggregate_fields';
  avg?: Maybe<SensorValue_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<SensorValue_Max_Fields>;
  min?: Maybe<SensorValue_Min_Fields>;
  stddev?: Maybe<SensorValue_Stddev_Fields>;
  stddev_pop?: Maybe<SensorValue_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<SensorValue_Stddev_Samp_Fields>;
  sum?: Maybe<SensorValue_Sum_Fields>;
  var_pop?: Maybe<SensorValue_Var_Pop_Fields>;
  var_samp?: Maybe<SensorValue_Var_Samp_Fields>;
  variance?: Maybe<SensorValue_Variance_Fields>;
};


/** aggregate fields of "SensorValue" */
export type SensorValue_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<SensorValue_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type SensorValue_Avg_Fields = {
  __typename?: 'SensorValue_avg_fields';
  value?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "SensorValue". All fields are combined with a logical 'AND'. */
export type SensorValue_Bool_Exp = {
  _and?: InputMaybe<Array<SensorValue_Bool_Exp>>;
  _not?: InputMaybe<SensorValue_Bool_Exp>;
  _or?: InputMaybe<Array<SensorValue_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  key?: InputMaybe<String_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  value?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "SensorValue" */
export enum SensorValue_Constraint {
  /** unique or primary key constraint */
  SensorValuePkey = 'SensorValue_pkey'
}

/** input type for incrementing numeric columns in table "SensorValue" */
export type SensorValue_Inc_Input = {
  value?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "SensorValue" */
export type SensorValue_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  key?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['timestamptz']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  value?: InputMaybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type SensorValue_Max_Fields = {
  __typename?: 'SensorValue_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  key?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['numeric']>;
};

/** aggregate min on columns */
export type SensorValue_Min_Fields = {
  __typename?: 'SensorValue_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  key?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['numeric']>;
};

/** response of any mutation on the table "SensorValue" */
export type SensorValue_Mutation_Response = {
  __typename?: 'SensorValue_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<SensorValue>;
};

/** on_conflict condition type for table "SensorValue" */
export type SensorValue_On_Conflict = {
  constraint: SensorValue_Constraint;
  update_columns?: Array<SensorValue_Update_Column>;
  where?: InputMaybe<SensorValue_Bool_Exp>;
};

/** Ordering options when selecting data from "SensorValue". */
export type SensorValue_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: SensorValue */
export type SensorValue_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "SensorValue" */
export enum SensorValue_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "SensorValue" */
export type SensorValue_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  key?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['timestamptz']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  value?: InputMaybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type SensorValue_Stddev_Fields = {
  __typename?: 'SensorValue_stddev_fields';
  value?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type SensorValue_Stddev_Pop_Fields = {
  __typename?: 'SensorValue_stddev_pop_fields';
  value?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type SensorValue_Stddev_Samp_Fields = {
  __typename?: 'SensorValue_stddev_samp_fields';
  value?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type SensorValue_Sum_Fields = {
  __typename?: 'SensorValue_sum_fields';
  value?: Maybe<Scalars['numeric']>;
};

/** update columns of table "SensorValue" */
export enum SensorValue_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value'
}

/** aggregate var_pop on columns */
export type SensorValue_Var_Pop_Fields = {
  __typename?: 'SensorValue_var_pop_fields';
  value?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type SensorValue_Var_Samp_Fields = {
  __typename?: 'SensorValue_var_samp_fields';
  value?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type SensorValue_Variance_Fields = {
  __typename?: 'SensorValue_variance_fields';
  value?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "SensorValue" */
  delete_SensorValue?: Maybe<SensorValue_Mutation_Response>;
  /** delete single row from the table: "SensorValue" */
  delete_SensorValue_by_pk?: Maybe<SensorValue>;
  /** insert data into the table: "SensorValue" */
  insert_SensorValue?: Maybe<SensorValue_Mutation_Response>;
  /** insert a single row into the table: "SensorValue" */
  insert_SensorValue_one?: Maybe<SensorValue>;
  /** update data of the table: "SensorValue" */
  update_SensorValue?: Maybe<SensorValue_Mutation_Response>;
  /** update single row of the table: "SensorValue" */
  update_SensorValue_by_pk?: Maybe<SensorValue>;
};


/** mutation root */
export type Mutation_RootDelete_SensorValueArgs = {
  where: SensorValue_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_SensorValue_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_SensorValueArgs = {
  objects: Array<SensorValue_Insert_Input>;
  on_conflict?: InputMaybe<SensorValue_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SensorValue_OneArgs = {
  object: SensorValue_Insert_Input;
  on_conflict?: InputMaybe<SensorValue_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_SensorValueArgs = {
  _inc?: InputMaybe<SensorValue_Inc_Input>;
  _set?: InputMaybe<SensorValue_Set_Input>;
  where: SensorValue_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_SensorValue_By_PkArgs = {
  _inc?: InputMaybe<SensorValue_Inc_Input>;
  _set?: InputMaybe<SensorValue_Set_Input>;
  pk_columns: SensorValue_Pk_Columns_Input;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "SensorValue" */
  SensorValue: Array<SensorValue>;
  /** fetch aggregated fields from the table: "SensorValue" */
  SensorValue_aggregate: SensorValue_Aggregate;
  /** fetch data from the table: "SensorValue" using primary key columns */
  SensorValue_by_pk?: Maybe<SensorValue>;
};


export type Query_RootSensorValueArgs = {
  distinct_on?: InputMaybe<Array<SensorValue_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<SensorValue_Order_By>>;
  where?: InputMaybe<SensorValue_Bool_Exp>;
};


export type Query_RootSensorValue_AggregateArgs = {
  distinct_on?: InputMaybe<Array<SensorValue_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<SensorValue_Order_By>>;
  where?: InputMaybe<SensorValue_Bool_Exp>;
};


export type Query_RootSensorValue_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "SensorValue" */
  SensorValue: Array<SensorValue>;
  /** fetch aggregated fields from the table: "SensorValue" */
  SensorValue_aggregate: SensorValue_Aggregate;
  /** fetch data from the table: "SensorValue" using primary key columns */
  SensorValue_by_pk?: Maybe<SensorValue>;
};


export type Subscription_RootSensorValueArgs = {
  distinct_on?: InputMaybe<Array<SensorValue_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<SensorValue_Order_By>>;
  where?: InputMaybe<SensorValue_Bool_Exp>;
};


export type Subscription_RootSensorValue_AggregateArgs = {
  distinct_on?: InputMaybe<Array<SensorValue_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<SensorValue_Order_By>>;
  where?: InputMaybe<SensorValue_Bool_Exp>;
};


export type Subscription_RootSensorValue_By_PkArgs = {
  id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type GetSensorValueQueryVariables = Exact<{
  currentTime: Scalars['timestamptz'];
}>;


export type GetSensorValueQuery = { __typename?: 'query_root', light: Array<{ __typename?: 'SensorValue', value: any, timestamp: any }>, temperature: Array<{ __typename?: 'SensorValue', value: any }>, humidity: Array<{ __typename?: 'SensorValue', value: any }>, mhz19Co2: Array<{ __typename?: 'SensorValue', value: any }> };


export const GetSensorValueDocument = gql`
    query GetSensorValue($currentTime: timestamptz!) {
  light: SensorValue(
    limit: 1
    order_by: {timestamp: desc}
    where: {key: {_eq: "light"}, timestamp: {_lte: $currentTime}}
  ) {
    value
    timestamp
  }
  temperature: SensorValue(
    limit: 1
    order_by: {timestamp: desc}
    where: {key: {_eq: "temperature"}, timestamp: {_lte: $currentTime}}
  ) {
    value
  }
  humidity: SensorValue(
    limit: 1
    order_by: {timestamp: desc}
    where: {key: {_eq: "humidity"}, timestamp: {_lte: $currentTime}}
  ) {
    value
  }
  mhz19Co2: SensorValue(
    limit: 1
    order_by: {timestamp: desc}
    where: {key: {_eq: "mhz19_co2"}, timestamp: {_lte: $currentTime}}
  ) {
    value
  }
}
    `;

/**
 * __useGetSensorValueQuery__
 *
 * To run a query within a React component, call `useGetSensorValueQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSensorValueQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSensorValueQuery({
 *   variables: {
 *      currentTime: // value for 'currentTime'
 *   },
 * });
 */
export function useGetSensorValueQuery(baseOptions: Apollo.QueryHookOptions<GetSensorValueQuery, GetSensorValueQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSensorValueQuery, GetSensorValueQueryVariables>(GetSensorValueDocument, options);
      }
export function useGetSensorValueLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSensorValueQuery, GetSensorValueQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSensorValueQuery, GetSensorValueQueryVariables>(GetSensorValueDocument, options);
        }
export type GetSensorValueQueryHookResult = ReturnType<typeof useGetSensorValueQuery>;
export type GetSensorValueLazyQueryHookResult = ReturnType<typeof useGetSensorValueLazyQuery>;
export type GetSensorValueQueryResult = Apollo.QueryResult<GetSensorValueQuery, GetSensorValueQueryVariables>;