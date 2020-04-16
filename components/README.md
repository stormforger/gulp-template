# Components

`components/` are meant to keep scenario-independent helpers that can be re-used and shared between test cases.

In case there are vertical specific components, they should be further name-spaced with the name of the vertical, e.g. `components/basket/basket.js`.

## Example

```js
function Basket(config) {
  config = Object.assign({}, (config || {}));
  $checkForKeys(config, ["baseURL", "locale"]);

  this.addToBasket = function (context, product_id) {
    context.post(config.baseURL + "/:locale/basket", {
      params: {
        locale: config.locale,
      },
      payload: JSON.stringify({
        "add_product_id": product_id,
      }),
    });

    // ...
  };
}
```

Usage:

```js
var productsDS = session.ds.loadStructured("products.csv");
var userBasket = new Basket({ baseURL: "http://example.com", locale: "en-GB", });

userBasket.addToBasket(session, session.ds.pickFrom(productsDS));
```

## Helpers

Generic helpers should only be rarely required. If used, they should be completely isolated and not directly related to a business feature.
