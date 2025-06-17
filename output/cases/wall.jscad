function xlCase_extrude_5_6_outline_fn(){
    return new CSG.Path2D([[-13.4999999,68.220381],[-13.4999999,-10.8403281]]).appendArc([-10.8594926,-13.818711],{"radius":3,"clockwise":false,"large":false}).appendPoint([59.1382725,-22.2674873]).appendArc([61.3813532,-23.7536867],{"radius":3,"clockwise":true,"large":false}).appendPoint([91.9932612,-77.1450645]).appendArc([95.0957579,-78.6109339],{"radius":3,"clockwise":false,"large":false}).appendPoint([133.6006916,-72.1034399]).appendArc([134.2245879,-71.9269386],{"radius":3,"clockwise":false,"large":false}).appendPoint([156.4151659,-62.9613632]).appendArc([158.1629219,-59.3114496],{"radius":3,"clockwise":false,"large":false}).appendPoint([120.3094385,65.8657561]).appendArc([117.855382,67.9681983],{"radius":3,"clockwise":false,"large":false}).appendPoint([101.4586795,70.2726045]).appendArc([100.4754496,70.5905043],{"radius":3,"clockwise":true,"large":false}).appendPoint([78.9701746,81.9454152]).appendArc([77.8308926,82.2810948],{"radius":3,"clockwise":false,"large":false}).appendPoint([51.7716599,84.5609823]).appendArc([51.3023531,84.56519],{"radius":3,"clockwise":false,"large":false}).appendPoint([32.6511295,83.2699233]).appendArc([32.0552584,83.1674687],{"radius":3,"clockwise":false,"large":false}).appendPoint([-11.3037107,71.1107182]).appendArc([-13.4999999,68.220381],{"radius":3,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5.6] });
}


function case_extrude_5_6_outline_fn(){
    return new CSG.Path2D([[-11.4999999,66.2147879],[-11.4999999,-8.7777236]]).appendArc([-8.7905181,-11.7636237],{"radius":3,"clockwise":false,"large":false}).appendPoint([61.7381395,-18.6258302]).appendArc([63.9577111,-19.9687302],{"radius":3,"clockwise":true,"large":false}).appendPoint([99.1214279,-73.6900163]).appendArc([102.131441,-75.0050691],{"radius":3,"clockwise":false,"large":false}).appendPoint([134.7058461,-69.4998591]).appendArc([135.3297424,-69.3233578],{"radius":3,"clockwise":false,"large":false}).appendPoint([153.8022859,-61.8599658]).appendArc([155.5468632,-58.1996092],{"radius":3,"clockwise":false,"large":false}).appendPoint([118.0549819,64.1729404]).appendArc([115.6041041,66.2649396],{"radius":3,"clockwise":false,"large":false}).appendPoint([99.1962033,68.5709196]).appendArc([98.2192065,68.8855376],{"radius":3,"clockwise":true,"large":false}).appendPoint([76.8008917,80.1302996]).appendArc([75.6678428,80.4626975],{"radius":3,"clockwise":false,"large":false}).appendPoint([53.5897378,82.3942814]).appendArc([53.120431,82.3984891],{"radius":3,"clockwise":false,"large":false}).appendPoint([34.465637,81.1029744]).appendArc([33.8765942,81.0024099],{"radius":3,"clockwise":false,"large":false}).appendPoint([-9.2968824,69.1070151]).appendArc([-11.4999999,66.2147879],{"radius":3,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5.6] });
}




                function _outerWall_case_fn() {
                    

                // creating part 0 of case _outerWall
                let _outerWall__part_0 = xlCase_extrude_5_6_outline_fn();

                // make sure that rotations are relative
                let _outerWall__part_0_bounds = _outerWall__part_0.getBounds();
                let _outerWall__part_0_x = _outerWall__part_0_bounds[0].x + (_outerWall__part_0_bounds[1].x - _outerWall__part_0_bounds[0].x) / 2
                let _outerWall__part_0_y = _outerWall__part_0_bounds[0].y + (_outerWall__part_0_bounds[1].y - _outerWall__part_0_bounds[0].y) / 2
                _outerWall__part_0 = translate([-_outerWall__part_0_x, -_outerWall__part_0_y, 0], _outerWall__part_0);
                _outerWall__part_0 = rotate([0,0,0], _outerWall__part_0);
                _outerWall__part_0 = translate([_outerWall__part_0_x, _outerWall__part_0_y, 0], _outerWall__part_0);

                _outerWall__part_0 = translate([0,0,0], _outerWall__part_0);
                let result = _outerWall__part_0;
                
            
                    return result;
                }
            
            

                function _innerWall_case_fn() {
                    

                // creating part 0 of case _innerWall
                let _innerWall__part_0 = case_extrude_5_6_outline_fn();

                // make sure that rotations are relative
                let _innerWall__part_0_bounds = _innerWall__part_0.getBounds();
                let _innerWall__part_0_x = _innerWall__part_0_bounds[0].x + (_innerWall__part_0_bounds[1].x - _innerWall__part_0_bounds[0].x) / 2
                let _innerWall__part_0_y = _innerWall__part_0_bounds[0].y + (_innerWall__part_0_bounds[1].y - _innerWall__part_0_bounds[0].y) / 2
                _innerWall__part_0 = translate([-_innerWall__part_0_x, -_innerWall__part_0_y, 0], _innerWall__part_0);
                _innerWall__part_0 = rotate([0,0,0], _innerWall__part_0);
                _innerWall__part_0 = translate([_innerWall__part_0_x, _innerWall__part_0_y, 0], _innerWall__part_0);

                _innerWall__part_0 = translate([0,0,0], _innerWall__part_0);
                let result = _innerWall__part_0;
                
            
                    return result;
                }
            
            

                function wall_case_fn() {
                    

                // creating part 0 of case wall
                let wall__part_0 = _outerWall_case_fn();

                // make sure that rotations are relative
                let wall__part_0_bounds = wall__part_0.getBounds();
                let wall__part_0_x = wall__part_0_bounds[0].x + (wall__part_0_bounds[1].x - wall__part_0_bounds[0].x) / 2
                let wall__part_0_y = wall__part_0_bounds[0].y + (wall__part_0_bounds[1].y - wall__part_0_bounds[0].y) / 2
                wall__part_0 = translate([-wall__part_0_x, -wall__part_0_y, 0], wall__part_0);
                wall__part_0 = rotate([0,0,0], wall__part_0);
                wall__part_0 = translate([wall__part_0_x, wall__part_0_y, 0], wall__part_0);

                wall__part_0 = translate([0,0,0], wall__part_0);
                let result = wall__part_0;
                
            

                // creating part 1 of case wall
                let wall__part_1 = _innerWall_case_fn();

                // make sure that rotations are relative
                let wall__part_1_bounds = wall__part_1.getBounds();
                let wall__part_1_x = wall__part_1_bounds[0].x + (wall__part_1_bounds[1].x - wall__part_1_bounds[0].x) / 2
                let wall__part_1_y = wall__part_1_bounds[0].y + (wall__part_1_bounds[1].y - wall__part_1_bounds[0].y) / 2
                wall__part_1 = translate([-wall__part_1_x, -wall__part_1_y, 0], wall__part_1);
                wall__part_1 = rotate([0,0,0], wall__part_1);
                wall__part_1 = translate([wall__part_1_x, wall__part_1_y, 0], wall__part_1);

                wall__part_1 = translate([0,0,0], wall__part_1);
                result = result.subtract(wall__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return wall_case_fn();
            }

        