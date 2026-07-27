# Display Item

QuickShop provides a display feature that helps players identify the item sold or purchased by a shop.

## Work Mode

Display Item has one work mode:

* Virtual DisplayItem

## Real DisplayItem

This mode has been removed. If you previously used it, QuickShop disables display items globally.

## Virtual DisplayItem

This mode sends an item packet to the player's client, causing it to display a floating item above the shop container.  
Player *can* see the item BUT it actually not exists on the server, it won't affect the server performance and more security.

To use this feature, you need to install [ProtocolLib](https://www.spigotmc.org/resources/protocollib.1997/) and set `display-type` to `2`.

To use [PacketEvents](https://modrinth.com/plugin/packetevents) for virtual display items, set `display-protocol` to `packetevents`.

## Configuration

```yaml
  #The display type you want use.
  #Old mode, ArmorStand (display-type=1) is Outdated and could not be used
  #0=Normal Dropped Item
  #2=Virtual Item (Requires ProtocolLib, fallback to type 0 if ProtocolLib is not installed)
  display-type: 2
```

## Globally disable display item

For some reason you don't want the shops on your server spawn the display items, you can disable this feature in config.yml

```yaml
  #Should we place display items on the chests?
  #This may cause duped items, especially for modded servers!
  #Virtual DisplayItem is safe for dupe
  display-items: false
```

## Per shop disable display item

Too many items in same region may hurt client fps, especially when you are in a shopping center.  
You can disable or enable display item for single shop by looking a quickshop and execute:

```mcfunction
/quickshop toggledisplay
```

Note: If display item already globally disabled, it won't force spawn display items.

## DisplayItem Guard

When QuickShop working **under Real DisplayItem mode**, DisplayItem Guard will enabled to protect DisplayItem dupe with Hopper, Water etc.  
Server administrators will receive alert when player trying to dupe display items.  

You can disable the alert by tweak the settings:

```yaml
#Allow QuickShop to send alerts when someone tries to make a displayItem exploit.
send-display-item-protection-alert: false
```

QuickShop also will check all display items to make sure they are still at the position they should be, and reset, respawn them when need.
You can tweak the options below the change this:

```yaml
  #QuickShop will check if the display item is in a valid position every specified amount of ticks.
  #Set to 0 to disable it.
  display-items-check-ticks: 6000
  #The interval (in ticks) at which QS checks the shops range to despawn/spawn displays.
  display-check-time: 40
```

## DisplayItem Auto Despawn (Not recommended)

This function is completely a compromise of client render performance, which will greatly increase the pressure on the server, and it is not recommended to use it.

This feature lets you despawn both real and virtual display items when players move too far away from shops.

```yaml
  #Allow QuickShop to automatically despawn displays when no players are in range of the shop.
  display-auto-despawn: false

  #The range at which displays will despawn.
  display-despawn-range: 20
```
