/* eslint-disable */
import * as types from './graphql'
import { type TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n        query extrinsicCsv($address: String!, $timestampGte: DateTime!, $timestampLte: DateTime!) {\n          extrinsicCsv(where: { addressIn: [$address], timestampGte: $timestampGte, timestampLte: $timestampLte })\n        }\n      ':
    types.ExtrinsicCsvDocument,
  '\n        query filters {\n          modules\n          chains {\n            genesisHash\n            name\n            logo\n          }\n        }\n      ':
    types.FiltersDocument,
  '\n              query extrinsics(\n                $after: String\n                $first: Int!\n                $where: ExtrinsicWhereInput\n                $orderBy: ExtrinsicOrderByInput\n              ) {\n                extrinsics(after: $after, first: $first, where: $where, orderBy: $orderBy) {\n                  edges {\n                    node {\n                      chain {\n                        genesisHash\n                        name\n                        logo\n                        subscanUrl\n                      }\n                      signer\n                      hash\n                      success\n                      block {\n                        height\n                        timestamp\n                      }\n                      call {\n                        name\n                        args\n                      }\n                      fee {\n                        value\n                        symbol\n                      }\n                      transfers {\n                        edges {\n                          node {\n                            debit\n                            credit\n                            amount {\n                              value\n                              symbol\n                            }\n                          }\n                        }\n                      }\n                      rewards {\n                        edges {\n                          node {\n                            debit\n                            credit\n                            amount {\n                              value\n                              symbol\n                            }\n                          }\n                        }\n                      }\n                      subscanLink {\n                        id\n                        url\n                      }\n                    }\n                  }\n                  pageInfo {\n                    hasNextPage\n                    endCursor\n                  }\n                }\n              }\n            ':
    types.ExtrinsicsDocument,
}

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n        query extrinsicCsv($address: String!, $timestampGte: DateTime!, $timestampLte: DateTime!) {\n          extrinsicCsv(where: { addressIn: [$address], timestampGte: $timestampGte, timestampLte: $timestampLte })\n        }\n      '
): (typeof documents)['\n        query extrinsicCsv($address: String!, $timestampGte: DateTime!, $timestampLte: DateTime!) {\n          extrinsicCsv(where: { addressIn: [$address], timestampGte: $timestampGte, timestampLte: $timestampLte })\n        }\n      ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n        query filters {\n          modules\n          chains {\n            genesisHash\n            name\n            logo\n          }\n        }\n      '
): (typeof documents)['\n        query filters {\n          modules\n          chains {\n            genesisHash\n            name\n            logo\n          }\n        }\n      ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n              query extrinsics(\n                $after: String\n                $first: Int!\n                $where: ExtrinsicWhereInput\n                $orderBy: ExtrinsicOrderByInput\n              ) {\n                extrinsics(after: $after, first: $first, where: $where, orderBy: $orderBy) {\n                  edges {\n                    node {\n                      chain {\n                        genesisHash\n                        name\n                        logo\n                        subscanUrl\n                      }\n                      signer\n                      hash\n                      success\n                      block {\n                        height\n                        timestamp\n                      }\n                      call {\n                        name\n                        args\n                      }\n                      fee {\n                        value\n                        symbol\n                      }\n                      transfers {\n                        edges {\n                          node {\n                            debit\n                            credit\n                            amount {\n                              value\n                              symbol\n                            }\n                          }\n                        }\n                      }\n                      rewards {\n                        edges {\n                          node {\n                            debit\n                            credit\n                            amount {\n                              value\n                              symbol\n                            }\n                          }\n                        }\n                      }\n                      subscanLink {\n                        id\n                        url\n                      }\n                    }\n                  }\n                  pageInfo {\n                    hasNextPage\n                    endCursor\n                  }\n                }\n              }\n            '
): (typeof documents)['\n              query extrinsics(\n                $after: String\n                $first: Int!\n                $where: ExtrinsicWhereInput\n                $orderBy: ExtrinsicOrderByInput\n              ) {\n                extrinsics(after: $after, first: $first, where: $where, orderBy: $orderBy) {\n                  edges {\n                    node {\n                      chain {\n                        genesisHash\n                        name\n                        logo\n                        subscanUrl\n                      }\n                      signer\n                      hash\n                      success\n                      block {\n                        height\n                        timestamp\n                      }\n                      call {\n                        name\n                        args\n                      }\n                      fee {\n                        value\n                        symbol\n                      }\n                      transfers {\n                        edges {\n                          node {\n                            debit\n                            credit\n                            amount {\n                              value\n                              symbol\n                            }\n                          }\n                        }\n                      }\n                      rewards {\n                        edges {\n                          node {\n                            debit\n                            credit\n                            amount {\n                              value\n                              symbol\n                            }\n                          }\n                        }\n                      }\n                      subscanLink {\n                        id\n                        url\n                      }\n                    }\n                  }\n                  pageInfo {\n                    hasNextPage\n                    endCursor\n                  }\n                }\n              }\n            ']

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<
  infer TType,
  any
>
  ? TType
  : never
