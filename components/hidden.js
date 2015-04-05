components.config(function(formioComponentsProvider) {
  formioComponentsProvider.register('hidden', {
    title: 'Hidden',
    template: 'formio/components/hidden.html',
    settings: {
      input: true,
      key: ''
    }
  });
});
app.run([
  '$templateCache',
  function($templateCache) {
    $templateCache.put('formio/components/hidden.html',
      '<input type="hidden" id="{{ component.key }}" name="{{ component.key }} ng-model="data[component.key]">'
    );
  }
]);
