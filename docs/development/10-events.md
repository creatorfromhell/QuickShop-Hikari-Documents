# QuickShop Custom Events (Developer Guide)

QuickShop-Hikari provides a comprehensive custom event system that allows developers to hook into nearly every stage of shop lifecycle, transactions, and management.

As of 6.2.0.11, the event system has been:

- Fully refactored
- Phase-based (PRE / MAIN / POST)
- More consistent
- More extensible
- Better integrated with ShopType and Tax systems

This page documents the supported custom events available to developers.

This page was last updated for version `6.2.0.11`.

---

# Event Architecture Overview

All QuickShop events extend: `AbstractQSEvent`

Many events are phase-based and follow a predictable lifecycle:

- PRE (Cancelable)
- MAIN (Core logic execution)
- POST (After execution)

Cancelable events allow you to block the action safely.

---

# Shop Lifecycle Events

These events relate to creation, deletion, and state changes of shops.

## ShopCreateEvent

Triggered when a shop is being created.

- Cancelable
- Fired before the shop is fully registered
- Can modify initial shop properties

Common uses:
- Restrict creation conditions
- Modify default values
- Enforce region rules

---

## ShopDeleteEvent

Triggered when a shop is deleted.

- Fired before removal
- Can be used for logging or cleanup

Common uses:
- External database sync
- Custom logging
- Reward refunds

---

## ShopDatabaseEvent

Triggered when a shop is saved, updated, or persisted.

Common uses:
- Sync external storage
- Monitor database updates
- Analytics

---

# Shop Modification Events

These events fire when shop properties are changed.

## ShopPriceEvent

Triggered when a shop price changes.

- Cancelable (PRE phase)
- Provides old and new price values

Common uses:
- Enforce price caps
- Apply dynamic pricing rules
- Integrate economy balancing plugins

---

## ShopNameEvent

Triggered when a shop name is changed.

Common uses:
- Filter inappropriate names
- Apply formatting rules

---

## ShopOwnerEvent

Triggered when shop ownership changes.

Common uses:
- Restrict transfers
- Sync permissions
- Audit logs

---

## ShopUnlimitedEvent

Triggered when unlimited mode is toggled.

Common uses:
- Restrict unlimited to admins
- Enforce custom stock rules

---

# Shop Type Events

The legacy `ShopType` enum has been replaced with a flexible system.

## ShopTypeEnhancedEvent

Triggered when a shop's type changes.

Supports:

- SELLING
- BUYING
- FROZEN
- Custom shop types (via IShopType)

Common uses:
- Restrict specific shop types
- React to freeze/unfreeze
- Update external maps or UIs

---

# Transaction Events

These events fire during trading.

## ShopPreTransactionEvent

Fired before a transaction is processed.

- Cancelable
- Allows validation

Common uses:
- Block trades conditionally
- Apply custom checks

---

## ShopTransactionEvent

Triggered when a transaction occurs.

Provides:

- Buyer
- Seller
- Price
- Item
- Quantity

Common uses:
- Logging
- Statistics
- External economy sync

---

## ShopEnhancedTaxEvent

Triggered during tax calculation.

Replaces legacy tax events.

Provides:

- Access to TaxRates
- Ability to modify owner tax
- Ability to modify buyer tax
- Transaction builder reference

Common uses:
- VIP tax discounts
- Dynamic taxation
- Region-based tax multipliers

---

# Limit & Restriction Events

## UserLimitCalculationEvent

Triggered when calculating how many shops a user may own.

Allows:

- Modifying shop limit
- Adding extra allowance
- Applying rank-based scaling

Common uses:
- Rank-based bonuses
- Permission-based shop limits
- Event-based shop cap increases

---

# Interaction Events

These events relate to player interaction behavior.

## InteractionPreEvent

Fired before interaction behavior executes.

- Cancelable
- Provides InteractionType
- Provides InteractionBehavior

Common uses:
- Restrict specific click types
- Override interaction logic

---

## InteractionPostEvent

Triggered after interaction execution.

Common uses:
- Metrics
- Logging
- Custom UI updates

---

# Display & Visual Events

## ShopDisplayUpdateEvent

Triggered when a display item updates.

Common uses:
- Replace display logic
- Sync external map markers
- Customize display rendering

---

# Layout & Formatting Events

## ShopLayoutResolveEvent

Triggered when resolving sign layout.

Common uses:
- Inject custom placeholders
- Modify sign lines
- Apply per-player formatting

---

# Phase-Based Events

Many events extend a phased event base class.

Phases include:

- PRE
- MAIN
- POST

When listening for events:

- Use PRE to cancel or modify
- Use POST for logging or side effects

Example:

```java
@EventHandler
public void onPriceChange(ShopPriceEvent event) {
    if (event.getNewPrice() < 0) {
        event.setCancelled(true);
    }
}
```

---

# Event Registration Example

```java
@EventHandler
public void onTransaction(ShopTransactionEvent event) {

    Player buyer = event.getBuyer();
    double price = event.getPrice();

    buyer.sendMessage("You spent " + price);
}
```

Make sure your class is registered as a Bukkit listener.

---

# Deprecated Events (6.2.0.11)

The following legacy events were replaced:

* ShopTypeEvent → replaced with ShopTypeEnhancedEvent
* ShopTaxEvent → replaced with ShopEnhancedTaxEvent
* ShopUpdateEvent → replaced with ShopDatabaseEvent

Do not use deprecated events in new development.

---

# Best Practices

* Always check event phase if applicable.
* Avoid heavy operations inside PRE phase.
* Never block the main thread with I/O.
* Respect cancellation states.
* Prefer enhanced events over legacy ones.

---

# Summary

QuickShop-Hikari provides events for:

* Shop lifecycle
* Price updates
* Ownership changes
* Shop type changes
* Transactions
* Tax calculations
* User limits
* Interaction handling
* Layout resolution
* Display updates

The 6.2.0.11 event system is designed for:

* Extensibility
* Stability
* Performance
* Modern API structure

For advanced integrations, it is recommended to use the enhanced event variants introduced in 6.2.x.