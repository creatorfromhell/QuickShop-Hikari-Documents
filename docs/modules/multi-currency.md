# Multi Currency

QuickShop-Hikari supports some Multi-Currency economy or bridge plugins, but they're not out of the box, you must configure them to take effect.

## Supported Economy Plugin

QuickShop-Hikari currently supports the multi-currency economy plugin below:

* Any plugin that supports [VaultUnlocked](https://www.spigotmc.org/resources/vaultunlocked.117277/)
* Currently Known Plugins to use this functionality
  * TheNewEconomy(for item currencies and virtual currencies)
  * PolyConomy(for virtual currencies)
  * LiteEco(for virtual currencies)

## Enable Multi-Currency support

To enable the multi-currency feature, you need to configure QuickShop economy processor to use 0 for Vault and install [VaultUnlocked](https://www.spigotmc.org/resources/vaultunlocked.117277/). This can be configured in config.yml:

```yaml
# What economy provider should QuickShop use?
# 0=Vault
# DO NOT TOUCH THIS IF YOU DON'T KNOW WHAT IT DOES. ASK FOR SUPPORT BEFORE TOUCHING THIS!
economy-type: 0
```

## Set default currency

You need to set a currency for default usage (like new shop default currency) and configure it in config.yml:

```yaml
# The currency used to create shops.
# Set this to "" to use the  default currency.
# This is only required if you use multiple currencies.
Currency: ''
```

## Set multi-currency alternate symbol

You can set an alternate for symbols. QuickShop-Hikari will use an alternate for specific currencies in text.
 
```yaml
  # This setting is for multi-currency setups.
  # If nothing matches in this list, it returns to the currency's name.
  alternate-currency-symbol-list:
  - USD;$
  - CNY;￥
```

## Change the currency for shops

Looking at a quickshop, execute `/quickshop currency <new-currency>` to change the shop currency.

## Ongoing Fee Currency

OngoingFee will always use the server scope default currency (`currency`).

## Shop Tax Currency

Shop tax will use per-shop currency with a global tax rate (cannot change yet).  
If you really want this feature, open a Feature Request on our Issue Tracker!
