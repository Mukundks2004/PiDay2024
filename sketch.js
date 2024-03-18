export default function sketch(p) {
    let angle = 0;
    let originX = 200;
    let originY = 300;
    let originDiameter = 200;
    let radius = originDiameter / 2;
    let graphStartX = 500;
    let graph = [];
    let numTermsSlider;
  
    p.setup = function() {
        p.createCanvas(1000, 600);
        numTermsSlider = p.createSlider(1, 8, 4, 1);
        numTermsSlider.position(0, 0);
    };
  
    p.draw = function() {
        p.background(0);
        p.stroke(255);
        let centreX = originX;
        let centreY = originY;
        let diameter = originDiameter;

        for (let i = 0; i < numTermsSlider.value(); i++) {
            p.ellipse(centreX, centreY, diameter / (2 * i + 1), diameter / (2 * i + 1));
            p.noFill();
            centreX += (radius / (2 * i + 1)) * p.cos((2 * i + 1) * angle);
            centreY += (radius / (2 * i + 1)) * p.sin((2 * i + 1) * angle);
        }

        p.strokeWeight(5);
        p.point(centreX, centreY);
        p.strokeWeight(1);

        angle += 0.02;

        graph.unshift(centreY);
        p.line(centreX, centreY, graphStartX, centreY);

        p.beginShape();
        for (let i = 0; i < graph.length; i++) {
            p.vertex(i + graphStartX, graph[i]);
        }
        p.endShape();
        if (graph.length > 250) {
            graph.pop();
        }
        p.noFill();
    };
  }