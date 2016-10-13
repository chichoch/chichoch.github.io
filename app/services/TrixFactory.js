(function () {
    var trixFactory = function () {
        var factory = {};
        
        factory.getTricks = [
                {trick: 'Shuvit'},
                {trick: '5050'},
                {trick: '180 NoComply'},
                {trick: 'Bkd-flip'},
                {trick: 'Fs shuvit'},
                {trick: 'Noseslide'},
                {trick: 'BONELESS!!!'},
                {trick: 'Jibb'},
                {trick: 'Någon slags powerslide'},
                {trick: 'kickflip'},
                {trick: 'Något switch'},
                {trick: 'Flamingo'},
                {trick: 'GRINDA BÖJJEN'},
                {trick: "ROCK'n'Roll"},
                {trick: 'Fakie Fliptrix (inte shuvit)'},
                {trick: 'Kickflip i banken'},
                {trick: 'Manual på boxen med en specialare'},
                {trick: '360flip or dont'},
                {trick: 'Gör en stall någonstans'},
                {trick: 'SLAPPY'},
                {trick: 'Nollie-trix!'},
                {trick: 'Ollie över något'},
                {trick: 'Todd Falcon speziale'},
                {trick: 'Nollie kickflip'},
                {trick: 'VALFRITT TRICK'},
                {trick: 'Ta mer fart'},
                {trick: 'SNABBAREEEE'},
                {trick: 'Dylan Rieder-landning (RIP)'},
                {trick: 'Wallie'},
                {trick: 'Bs 180 trix'},
                {trick: 'Bs grind'},
                {trick: 'Fs grind'},
                {trick: 'Bs slide'},
                {trick: 'Fs slide'},
                {trick: 'Fakie 180 trix'}                
            ];
        return factory;
    };
    
    angular.module('listopheApp').factory('trixFactory', trixFactory);

})();
