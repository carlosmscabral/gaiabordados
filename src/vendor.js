/* Used by webpack production build only.
   This file contains references to the vendor libraries we're using.
   Separate bundles for vendor code is useful - as it won't change as much as
   our code. So vendor.js can be cached and not reloaded if only our own code
   is changing.
*/

/* eslint-disable no-unused-vars */

import fetch from 'whatwg-fetch';
import jquery from 'jquery';
