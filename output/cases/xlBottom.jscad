function xlCase_extrude_1_outline_fn(){
    return new CSG.Path2D([[-13.4999999,68.220381],[-13.4999999,-10.8403281]]).appendArc([-10.8594926,-13.818711],{"radius":3,"clockwise":false,"large":false}).appendPoint([59.1382725,-22.2674873]).appendArc([61.3813532,-23.7536867],{"radius":3,"clockwise":true,"large":false}).appendPoint([91.9932612,-77.1450645]).appendArc([95.0957579,-78.6109339],{"radius":3,"clockwise":false,"large":false}).appendPoint([133.6006916,-72.1034399]).appendArc([134.2245879,-71.9269386],{"radius":3,"clockwise":false,"large":false}).appendPoint([156.4151659,-62.9613632]).appendArc([158.1629219,-59.3114496],{"radius":3,"clockwise":false,"large":false}).appendPoint([120.3094385,65.8657561]).appendArc([117.855382,67.9681983],{"radius":3,"clockwise":false,"large":false}).appendPoint([101.4586795,70.2726045]).appendArc([100.4754496,70.5905043],{"radius":3,"clockwise":true,"large":false}).appendPoint([78.9701746,81.9454152]).appendArc([77.8308926,82.2810948],{"radius":3,"clockwise":false,"large":false}).appendPoint([51.7716599,84.5609823]).appendArc([51.3023531,84.56519],{"radius":3,"clockwise":false,"large":false}).appendPoint([32.6511295,83.2699233]).appendArc([32.0552584,83.1674687],{"radius":3,"clockwise":false,"large":false}).appendPoint([-11.3037107,71.1107182]).appendArc([-13.4999999,68.220381],{"radius":3,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function xlBottom_case_fn() {
                    

                // creating part 0 of case xlBottom
                let xlBottom__part_0 = xlCase_extrude_1_outline_fn();

                // make sure that rotations are relative
                let xlBottom__part_0_bounds = xlBottom__part_0.getBounds();
                let xlBottom__part_0_x = xlBottom__part_0_bounds[0].x + (xlBottom__part_0_bounds[1].x - xlBottom__part_0_bounds[0].x) / 2
                let xlBottom__part_0_y = xlBottom__part_0_bounds[0].y + (xlBottom__part_0_bounds[1].y - xlBottom__part_0_bounds[0].y) / 2
                xlBottom__part_0 = translate([-xlBottom__part_0_x, -xlBottom__part_0_y, 0], xlBottom__part_0);
                xlBottom__part_0 = rotate([0,0,0], xlBottom__part_0);
                xlBottom__part_0 = translate([xlBottom__part_0_x, xlBottom__part_0_y, 0], xlBottom__part_0);

                xlBottom__part_0 = translate([0,0,0], xlBottom__part_0);
                let result = xlBottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return xlBottom_case_fn();
            }

        