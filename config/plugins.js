module.exports = ({ env }) => ({
  'sbp-google-map-field': {
    enabled: true,
    config: {
      apiKey: env('GOOGLE_MAPS_API_KEY'),
    },
  },
});