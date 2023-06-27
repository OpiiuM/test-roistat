export default {
  inheritAttrs: false,

  model: {
    prop: 'value',
    event: 'input',
  },

  props: {
    value: {
      type: [String, Number],
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    isError: {
      type: Boolean,
      default: false,
    },
    errorText: {
      type: String,
      default: '',
    },
  },
};
