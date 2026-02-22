# Shop Trade Menu

# Shop Trade Menu (GUI)

The Shop Trade Menu is the player-facing trading interface.

It allows players to buy from or sell to a shop using a modern inventory GUI instead of clicking signs repeatedly.

---

## How It Gets Opened

The Trade Menu is opened through the Interaction Manager using: `TRADE_UI`

When a player interacts with a shop:

* If `TRADE_UI` is enabled
* And they have permission to trade
* The Trade GUI opens automatically

If disabled, trading falls back to traditional interaction behavior.

---

## What It Allows

The Trade Menu provides:

* Item preview
* Price display
* Stock display
* Quantity selection
* Confirm purchase/sale
* Shift-click shortcuts (if enabled)

This menu makes bulk trading easier and more intuitive.

---

## Configuration

Configured in: `gui.yml`

You can customize:

- Layout
- Buttons
- Confirmation slots
- Navigation
- Item display formatting

---

## Translation Support

Supports `lang:` prefix using: `messages.yml`

Reference: 

---

## Best Use Cases

Recommended for:

* Economy-heavy servers
* High-traffic markets
* Servers with custom currencies
* Servers wanting a modern UI experience