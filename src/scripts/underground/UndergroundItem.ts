class UndergroundItem {
    public name: string;
    public id: number;
    public space: Array<Array<number>>;
    public value: number;
    public valueType: string;
    public region: GameConstants.Region;

    public static list: Array<UndergroundItem> = [];

    constructor(name: string, id: number, space: Array<Array<number>>, region: GameConstants.Region = GameConstants.Region.none, value = 1, valueType = 'Diamond') {
        this.name = name;
        this.id = id;
        this.space = space;
        this.region = region;
        this.value = value;
        this.valueType = valueType;
    }

    public static addItem(name, id, space, ...rest) {
        UndergroundItem.list.push(new UndergroundItem(name, id, space, ...rest));
    }

    public static getRandomItem(highestRegion: GameConstants.Region): UndergroundItem {
        const availableItems = UndergroundItem.list.filter(item => item.region <= highestRegion);

        const i = Math.floor(Math.random() * (availableItems.length));
        return availableItems[i] || availableItems[0];
    }

    public isStone(): boolean {
        return ItemList[this.valueType] instanceof EvolutionStone;
    }

    public static getFullResourceName(valuetype: string, amt: number): string {
        if (valuetype != 'Diamond' && amt >= 50) {
            valuetype += ' shard';
        }
        if (amt > 1) {
            valuetype += 's';
        }
        return GameConstants.humanifyString(valuetype);
    }

}

UndergroundItem.addItem('Helix Fossil', 1, [[0,1,1,1], [1,1,1,1], [1,1,1,1], [1,1,1,0]], GameConstants.Region.kanto, 0, 'Mine Egg');
UndergroundItem.addItem('Dome Fossil', 2, [[2,2,2,2,2], [2,2,2,2,2], [2,2,2,2,2], [0,2,2,2,0]], GameConstants.Region.kanto,  0, 'Mine Egg');
UndergroundItem.addItem('Old Amber', 3, [[0,3,3,3], [3,3,3,3], [3,3,3,3], [3,3,3,0]], GameConstants.Region.kanto, 0, 'Mine Egg');
UndergroundItem.addItem('Root Fossil', 4, [[0,0,4,4,4], [0,0,4,4,4], [4,0,0,4,4], [4,4,4,4,4], [0,4,4,4,0]], GameConstants.Region.hoenn, 0, 'Mine Egg');
UndergroundItem.addItem('Claw Fossil', 5, [[5,5,5,0,0], [5,5,5,5,0], [0,5,5,5,5], [0,0,0,5,5]], GameConstants.Region.hoenn, 0, 'Mine Egg');
UndergroundItem.addItem('Armor Fossil', 6, [[0,6,6,6,0], [0,6,6,6,0], [6,6,6,6,6], [0,6,6,6,0]], GameConstants.Region.sinnoh, 0, 'Mine Egg');
UndergroundItem.addItem('Skull Fossil', 7, [[7,7,7,7], [7,7,7,7], [7,7,7,7], [0,7,7,0]], GameConstants.Region.sinnoh, 0, 'Mine Egg');
UndergroundItem.addItem('Rare Bone', 8, [[8,0,0,0,0,8], [8,8,8,8,8,8], [8,0,0,0,0,8]], GameConstants.Region.sinnoh, 3);
UndergroundItem.addItem('Star Piece', 9, [[0,9,0], [9,9,9], [0,9,0]], GameConstants.Region.johto, 5);
UndergroundItem.addItem('Revive', 10, [[0,10,0], [10,10,10], [0,10,0]], GameConstants.Region.kanto, 2);
UndergroundItem.addItem('Max Revive', 11, [[11,11,11], [11,11,11], [11,11,11]], GameConstants.Region.kanto, 4);
UndergroundItem.addItem('Iron Ball', 12, [[12,12,12], [12,12,12], [12,12,12]], GameConstants.Region.sinnoh, 2);
UndergroundItem.addItem('Heart Scale', 13, [[13,0], [13,13]], GameConstants.Region.hoenn, 10);
UndergroundItem.addItem('Light Clay', 14, [[14,0,14,0], [14,14,14,0], [14,14,14,14], [0,14,0,14]], GameConstants.Region.sinnoh, 2);
UndergroundItem.addItem('Odd Keystone', 15, [[15,15,15,15], [15,15,15,15], [15,15,15,15], [15,15,15,15]], GameConstants.Region.sinnoh, 6);
UndergroundItem.addItem('Hard Stone', 16, [[16,16],[16,16]], GameConstants.Region.johto, 4);

UndergroundItem.addItem('Fire Stone', 17, [[17,17,17], [17,17,17], [17,17,17]], GameConstants.Region.kanto, 1, 'Fire_stone');
UndergroundItem.addItem('Water Stone', 18, [[18,18,18], [18,18,18], [18,18,18]], GameConstants.Region.kanto, 1, 'Water_stone');
UndergroundItem.addItem('Thunder Stone', 19, [[19,19,19], [19,19,19], [19,19,19]], GameConstants.Region.kanto, 1, 'Thunder_stone');
UndergroundItem.addItem('Leaf Stone', 20, [[20,20,20], [20,20,20], [20,20,20]], GameConstants.Region.kanto, 1, 'Leaf_stone');
UndergroundItem.addItem('Moon Stone', 21, [[21,21,21], [21,21,21], [21,21,21]], GameConstants.Region.kanto, 1, 'Moon_stone');
UndergroundItem.addItem('Sun Stone', 22, [[22,22,22], [22,22,22], [22,22,22]], GameConstants.Region.johto, 1, 'Sun_stone');

UndergroundItem.addItem('Oval Stone', 23, [[23,23,23], [23,23,23], [23,23,23]], GameConstants.Region.sinnoh, 3);
UndergroundItem.addItem('Everstone', 24, [[24,24,24], [24,24,24]], GameConstants.Region.johto, 3);
UndergroundItem.addItem('Smooth Rock', 25, [[25,25,25], [25,25,25], [25,25,25]], GameConstants.Region.sinnoh, 2);
UndergroundItem.addItem('Heat Rock', 26, [[26,26,26], [26,26,26]], GameConstants.Region.sinnoh, 2);
UndergroundItem.addItem('Icy Rock', 27, [[27,27,27], [27,27,27], [27,27,27]], GameConstants.Region.sinnoh, 2);
UndergroundItem.addItem('Damp Rock', 28, [[28,28,28], [28,28,28], [28,0,28]], GameConstants.Region.sinnoh, 2);

UndergroundItem.addItem('Draco Plate', 29, [[29,29,29,29], [29,29,29,29], [29,29,29,29]], GameConstants.Region.sinnoh, 100, 'dragon');
UndergroundItem.addItem('Dread Plate', 30, [[30,30,30,30], [30,30,30,30], [30,30,30,30]], GameConstants.Region.sinnoh, 100, 'dark');
UndergroundItem.addItem('Earth Plate', 31, [[31,31,31,31], [31,31,31,31], [31,31,31,31]], GameConstants.Region.sinnoh, 100, 'ground');
UndergroundItem.addItem('Fist Plate', 32, [[32,32,32,32], [32,32,32,32], [32,32,32,32]], GameConstants.Region.sinnoh, 100, 'fighting');
UndergroundItem.addItem('Flame Plate', 33, [[33,33,33,33], [33,33,33,33], [33,33,33,33]], GameConstants.Region.sinnoh, 100, 'fire');
UndergroundItem.addItem('Icicle Plate', 34, [[34,34,34,34], [34,34,34,34], [34,34,34,34]], GameConstants.Region.sinnoh, 100, 'ice');
UndergroundItem.addItem('Insect Plate', 35, [[35,35,35,35], [35,35,35,35], [35,35,35,35]], GameConstants.Region.sinnoh, 100, 'bug');
UndergroundItem.addItem('Iron Plate', 36, [[36,36,36,36], [36,36,36,36], [36,36,36,36]], GameConstants.Region.sinnoh, 100, 'steel');
UndergroundItem.addItem('Meadow Plate', 37, [[37,37,37,37], [37,37,37,37], [37,37,37,37]], GameConstants.Region.sinnoh, 100, 'grass');
UndergroundItem.addItem('Mind Plate', 38, [[38,38,38,38], [38,38,38,38], [38,38,38,38]], GameConstants.Region.sinnoh, 100, 'psychic');
UndergroundItem.addItem('Sky Plate', 39, [[39,39,39,39], [39,39,39,39], [39,39,39,39]], GameConstants.Region.sinnoh, 100, 'flying');
UndergroundItem.addItem('Splash Plate', 40, [[40,40,40,40], [40,40,40,40], [40,40,40,40]], GameConstants.Region.sinnoh, 100, 'water');
UndergroundItem.addItem('Spooky Plate', 41, [[41,41,41,41], [41,41,41,41], [41,41,41,41]], GameConstants.Region.sinnoh, 100, 'ghost');
UndergroundItem.addItem('Stone Plate', 42, [[42,42,42,42], [42,42,42,42], [42,42,42,42]], GameConstants.Region.sinnoh, 100, 'rock');
UndergroundItem.addItem('Toxic Plate', 43, [[43,43,43,43], [43,43,43,43], [43,43,43,43]], GameConstants.Region.sinnoh, 100, 'poison');
UndergroundItem.addItem('Zap Plate', 44, [[44,44,44,44], [44,44,44,44], [44,44,44,44]], GameConstants.Region.sinnoh, 100, 'electric');
UndergroundItem.addItem('Pixie Plate', 45, [[45,45,45,45], [45,45,45,45], [45,45,45,45]], GameConstants.Region.sinnoh, 100, 'fairy');
