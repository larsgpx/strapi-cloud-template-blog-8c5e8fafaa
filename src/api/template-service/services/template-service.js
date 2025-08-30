'use strict';

/**
 * template-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::template-service.template-service');
