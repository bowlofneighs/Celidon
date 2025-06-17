function case_extrude_1_outline_fn(){
    return new CSG.Path2D([[-11.4999999,66.2147879],[-11.4999999,-8.7777236]]).appendArc([-8.7905181,-11.7636237],{"radius":3,"clockwise":false,"large":false}).appendPoint([61.7381395,-18.6258302]).appendArc([63.9577111,-19.9687302],{"radius":3,"clockwise":true,"large":false}).appendPoint([99.1214279,-73.6900163]).appendArc([102.131441,-75.0050691],{"radius":3,"clockwise":false,"large":false}).appendPoint([134.7058461,-69.4998591]).appendArc([135.3297424,-69.3233578],{"radius":3,"clockwise":false,"large":false}).appendPoint([153.8022859,-61.8599658]).appendArc([155.5468632,-58.1996092],{"radius":3,"clockwise":false,"large":false}).appendPoint([118.0549819,64.1729404]).appendArc([115.6041041,66.2649396],{"radius":3,"clockwise":false,"large":false}).appendPoint([99.1962033,68.5709196]).appendArc([98.2192065,68.8855376],{"radius":3,"clockwise":true,"large":false}).appendPoint([76.8008917,80.1302996]).appendArc([75.6678428,80.4626975],{"radius":3,"clockwise":false,"large":false}).appendPoint([53.5897378,82.3942814]).appendArc([53.120431,82.3984891],{"radius":3,"clockwise":false,"large":false}).appendPoint([34.465637,81.1029744]).appendArc([33.8765942,81.0024099],{"radius":3,"clockwise":false,"large":false}).appendPoint([-9.2968824,69.1070151]).appendArc([-11.4999999,66.2147879],{"radius":3,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function bottom_case_fn() {
                    

                // creating part 0 of case bottom
                let bottom__part_0 = case_extrude_1_outline_fn();

                // make sure that rotations are relative
                let bottom__part_0_bounds = bottom__part_0.getBounds();
                let bottom__part_0_x = bottom__part_0_bounds[0].x + (bottom__part_0_bounds[1].x - bottom__part_0_bounds[0].x) / 2
                let bottom__part_0_y = bottom__part_0_bounds[0].y + (bottom__part_0_bounds[1].y - bottom__part_0_bounds[0].y) / 2
                bottom__part_0 = translate([-bottom__part_0_x, -bottom__part_0_y, 0], bottom__part_0);
                bottom__part_0 = rotate([0,0,0], bottom__part_0);
                bottom__part_0 = translate([bottom__part_0_x, bottom__part_0_y, 0], bottom__part_0);

                bottom__part_0 = translate([0,0,0], bottom__part_0);
                let result = bottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_case_fn();
            }

        