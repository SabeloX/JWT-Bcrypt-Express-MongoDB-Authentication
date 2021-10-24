/**
 * Export all controllers here
 */

import { register, login } from './users/authentication.controllers';
import { getUsers } from './users/user.controllers';

// list controllers
export default { register, login, getUsers };