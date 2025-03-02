# Display Item

QuickShop provides a cool feature that lets players identify shop items.

## Work Mode

Currently, there is one built-in display provider, which is the virtual display.


## Virtual DisplayItem

This work mode will send an Item packet to the player's client to trick the client into displaying a floating item above the shop container.  
Player *can* see the item, BUT it actually does not exist on the server. It won't affect the server's performance and will provide more security.

To use this feature, you must install  either [ProtocolLib](https://www.spigotmc.org/resources/protocollib.1997/) or [packetevents](https://www.spigotmc.org/resources/packetevents-api.80279/) and set `display-type` to `2`.

## Configuration

```yaml
  #The display type you want to use.
  #2=Virtual Item (Requires ProtocolLib/packetevents, disabled if ProtocolLib/packetevents is not installed)
  display-type: 2
```

## Globally disable the display item

For some reason, you don't want the shops on your server to spawn the display items. You can disable this feature in config.yml

```yaml
  #Should we place display items on the chests?
  #This may cause duped items, especially for modded servers!
  #Virtual DisplayItem is safe for dupe
  display-items: false
```

## Per shop disable display item

Too many items in the same region may hurt client fps, especially when you are in a shopping center.  
You can disable or enable the display item for a single shop by looking a quickshop and execute:

```mcfunction
/quickshop toggledisplay
```

Note: If the display item is globally disabled, it won't force spawn display items.

## DisplayItem Auto Despawn (Not recommended)

This function is ultimately a compromise of client render performance, which will greatly increase the pressure on the server and is not recommended.

This feature allows you to despawn the DisplayItem when the player is too far from shops.

```yaml
  #Allow QuickShop to automatically despawn displays when no players are in range of the shop.
  display-auto-despawn: false

  #The range at which displays will despawn.
  display-despawn-range: 20
```
