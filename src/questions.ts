/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question } from './types';
import { TAXONOMY_QUESTIONS } from './questions/taxonomy';
import { CHORDATA_QUESTIONS } from './questions/chordata';
import { WORMS_QUESTIONS } from './questions/worms';
import { MICROBES_SPONGES_QUESTIONS } from './questions/microbes_sponges';
import { ARTHROPODS_ECHINODERMS_QUESTIONS } from './questions/arthropods_echinoderms';
import { MOLLUSCS_ANNELIDS_QUESTIONS } from './questions/molluscs_annelids';
import { BIGDAVE_ZOOLOGY_QUESTIONS } from './questions/bigdave_zoology';

export const BANK: Question[] = [
  ...TAXONOMY_QUESTIONS,
  ...CHORDATA_QUESTIONS,
  ...WORMS_QUESTIONS,
  ...MICROBES_SPONGES_QUESTIONS,
  ...ARTHROPODS_ECHINODERMS_QUESTIONS,
  ...MOLLUSCS_ANNELIDS_QUESTIONS,
  ...BIGDAVE_ZOOLOGY_QUESTIONS,
];
