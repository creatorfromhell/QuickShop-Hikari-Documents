# Item Matcher

ItemMatcher is a utility used by QuickShop-Hikari to compare the items, it is the most important thing in whole system.

:::caution

If this feature is misconfigured, it will cause the plugin to stop working, and it can even be used for dupes, glitches or even worse.  
**TL;DR: Keep default unless you know what you're doing.**

:::

## Matchers

QuickShop-Hikari supports several matcher modes by default:

* Bukkit Item Matcher (default)
* QuickShop Item Matcher
* Strict Bukkit Matcher
* Modern Matcher

You can change the matcher by tweaking the setting:

```yaml
matcher:
  # Matcher type:
  # 0 = QuickShop matcher (configurable below)
  # 1 = Bukkit matcher
  # 2 = Strict Bukkit matcher (equals method)
  # 3 = Modern matcher
  work-type: 1

  # Ignore stack size when matching items.
  # Recommended for shop matching.
  ignore-count: true

  # Require material/type to match (strongly recommended).
  check-material: true
```

By default, QuickShop-Hikari will use Bukkit's matcher to provide the best cross-compatibility.  
But still, you can toggle to QuickShop Item Matcher if you need to customize the comparison behavior or run QuickShop on a server jar that has issues with the Bukkit comparison system.

## Customize the metadata comparing

Customize only works under QuickShop Item Matcher.  

:::info

Using the QuickShop Item Matcher may have a slight performance impact on the server. Using the Bukkit API to compare item by item results in more serialization/deserialization work.

Keep using Bukkit Item Matcher if not necessary.

:::

You can specifically enable or disable the relevant checks by tweaking the configuration.

```yaml
matcher:
  # Compare ONLY enabled components below.
  #
  # DIRECT keys map 1:1 to DataComponentTypeKeys.<KEY>
  # GROUP keys expand into multiple underlying component keys
  components:
    # Compare durability/damage.
    DAMAGE: true

    # Compare custom display name.
    CUSTOM_NAME: true

    # Compare lore.
    LORE: true

    # Compare CustomModelData.
    CUSTOM_MODEL_DATA: true

    # Compare enchantments.
    ENCHANTMENTS: true

    # Compare stored enchantments (enchanted books).
    STORED_ENCHANTMENTS: true

    # Compare attribute modifiers.
    ATTRIBUTE_MODIFIERS: true

    # Compare unbreakable flag.
    UNBREAKABLE: true

    # Compare armor trim.
    TRIM: true

    # Compare dyed color.
    DYED_COLOR: true

    # Compare tooltip hide flags.
    HIDE_ADDITIONAL_TOOLTIP: true

    # Compare enchantment glint override.
    ENCHANTMENT_GLINT_OVERRIDE: true

    # Compare potion contents.
    POTION_CONTENTS: true

    # Compare potion duration scaling.
    POTION_DURATION_SCALE: true

    # Compare book content (written & writable).
    BOOKS: true

    # Compare banner patterns.
    BANNER: true

    # Compare skull profile/texture.
    SKULL: true

    # Compare firework metadata (rockets + stars).
    FIREWORK: true

    # Compare map metadata.
    MAP: true

    # Compare leather armor dye color.
    LEATHER_ARMOR: true

    # Compare fish bucket entity data.
    FISH_BUCKET: true

    # Compare suspicious stew effects.
    SUSPICIOUS_STEW: true

    # Compare shulker box contents.
    SHULKER_BOX: true

    # Compare bundle contents.
    BUNDLE: true

  # For Item (Only works under QuickShop ItemMatcher)
  item:
    # Should the Plugin check the item damage?
    damage: true
    # Should the Plugin check the item repair cost?
    repaircost: false
    # Should the Plugin check the item display name?
    displayname: true
    # Should the Plugin check the item lores?
    lores: true
    # Should the Plugin check the item enchs?
    enchs: true
    # Should the Plugin check the item potions?
    potions: true
    # Should the Plugin check the item attributes?
    attributes: true
    # Should the Plugin check the item itemflags?
    itemflags: true
    # Should the Plugin check the item custommodeldata?
    custommodeldata: true
    # Should the Plugin check the item bookmetas?
    books: true
    # Should the Plugin check the banner meta?
    banner: true
    # Should the Plugin check the skull meta?
    skull: true
    # Should the Plugin check the firework meta?
    firework: true
    # Should the Plugin check the map meta?
    map: true
    # Should the Plugin check the leather armor meta?
    leatherArmor: true
    # Should the Plugin check the fishBucket meta?
    fishBucket: true
    # Should the Plugin check the suspiciousStew meta?
    suspiciousStew: true
    # Should the Plugin check the shulkerBox contents?
    shulkerBox: true
    # Should the Plugin check the bundle contents?
    bundle: true
```