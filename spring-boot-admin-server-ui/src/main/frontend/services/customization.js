/*
 * Copyright 2014-2018 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import axios from '@/utils/axios';
import waitForPolyfill from '@/utils/eventsource-polyfill';
import logtail from '@/utils/logtail';
import {Observable} from '@/utils/rxjs'
import uri from '@/utils/uri';
import _ from 'lodash';

class Customization {

  static async fetchCustomization() {
    return axios.get('customization');
  }

}

export default Customization;
