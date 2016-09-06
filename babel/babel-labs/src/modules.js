//import * as math from "./math" 
import ln,{sum,pi} from "./math";

ln("2π = " + sum(pi,pi));

// Dynamic loading – ‘System’ is default loader
System.import('lib/math').then(function(m) {
  alert("2π = " + m.sum(m.pi, m.pi));
});