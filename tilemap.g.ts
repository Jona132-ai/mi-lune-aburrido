// Código generado automáticamente. No editar.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "nivel2":
            case "nivel2":return tiles.createTilemap(hex`23000d000101010101050505050506050505050505050506060606060604040404040404040404060606060605050505050605050505050505050606060606060404040404040404040401010101060606060606060606060606060605060606060606040404040404040404040101010101060606060606060606060606060506060606060604040404040404040404010101010106060606060606060606060606060606060606060404040404040404040401010101010303030303030303030303030303030303030303030303030303030303030101070707070202020202020202020202020202020202020202020202020202020202010101010103030303030303030303030303030303030303030303030303030303030301010101010606060606060606060606060606060606060606040404040404040404040101010101060606060606060606060606060506060606060604040404040404040404010106060606050505050605050505050505050606060606060404040404040404040406060601050505050505060505050505050505060606060606040404040404040404040601010101050505050506050505050505050506060606060604040404040404040404`, img`
...................................
...................................
...................................
...................................
...................................
...................................
...................................
...................................
...................................
...................................
...................................
...................................
...................................
`, [myTiles.transparency16,sprites.dungeon.hazardLava0,sprites.vehicle.roadIntersection1,sprites.dungeon.hazardWater,sprites.builtin.forestTiles22,sprites.dungeon.hazardLava1,sprites.dungeon.darkGroundWest,sprites.vehicle.roadIntersection3], TileScale.Sixteen);
            case "nivel1":
            case "nivel1":return tiles.createTilemap(hex`23000d000000000000000700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005030000000300000000000000000000000000000000000300000000000003000000000202020202020202020200000000020202020202020202020202020202020202020202040404040404040404040000000004040404040404040404040404040404040404040400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006060606060606060606000000000000060606060606060606060606060606060606060101010101010101010101010101010106060606060606060606060606060606060606`, img`
...................................
...................................
...................................
...................................
...................................
.2...2.................2......2....
2222222222....222222222222222222222
...................................
...................................
...................................
...................................
2222222222......2222222222222222222
................2222222222222222222
`, [myTiles.transparency16,sprites.dungeon.hazardLava1,sprites.vehicle.roadIntersection1,sprites.builtin.oceanSand0,sprites.builtin.oceanSand12,sprites.dungeon.chestClosed,sprites.dungeon.darkGroundNorth,sprites.dungeon.collectibleBlueCrystal], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Código generado automáticamente. No editar.
