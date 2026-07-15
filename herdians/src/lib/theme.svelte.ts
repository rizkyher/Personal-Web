let _dark = $state(false);

export const theme = {
  get dark() { return _dark; },
  toggle() { _dark = !_dark; },
  set(v: boolean) { _dark = v; },
};
