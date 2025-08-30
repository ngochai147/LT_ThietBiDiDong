"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUsers = fetchUsers;
const bai18_1 = require("./bai18");
async function fetchUsers(ids) {
    const promises = ids.map((id) => (0, bai18_1.fetchUser)(id));
    const result = await Promise.all(promises);
    return result;
}
