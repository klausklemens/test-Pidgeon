function sort(input) {
  input = [1,2,3,7,2,7,0,4,1,76,90,5,12,56,89,6,23,1,5,7,835,43,456,34,52,3,7,9,3,3,7,9,4,2,5,8,9,5,2,2];
  input = [3,5,9,2,8,6,1,4,7];
  //input = [4,3,2,1];
  daten = input
  //daten = quicksort(daten);
  //quicksortWiki(0,daten.length-1);
  //bouble();
  insertion();
  return daten;
}
var daten;

function tausche(i,j) {
  daten[i] += daten[j];           // i = i + j   ~~
  daten[j] = daten[i] - daten[j]; // j = i - j   ~j=i  
  daten[i] = daten[i] - daten[j]; // i = i+j - i ~i=j
}

function insertion() {
  for(var i = 1; i < daten.length; i++) {
    if(daten[i] > daten[i-1]) { continue; }
    for(var comp = i-1; comp >= 0; comp--) {
      tausche(comp,comp+1);
      if(daten[comp-1] < daten[comp] || comp <= 0) { break; }
    }
  }
}

function bouble() {
  var n = daten.length;
  while(n > 1) {
    for(var i = 0; i < n-1; i++) {
      if(daten[i] > daten[i+1]) { tausche(i,i+1); }
    }
    n--;
  }
}

function quicksortWiki(links, rechts) {
  if(links < rechts) {
    var teiler = teile(links, rechts);
    quicksortWiki(links, teiler-1);
    quicksortWiki(teiler+1, rechts);
  }
}

function teile(links, rechts) {
  var i = links;
  // Starte mit j links vom Pivotelement
  var j = rechts - 1;
  var pivot = daten[rechts];
  do {
    // Suche von links ein Element, welches größer als das Pivotelement ist
    while(daten[i] <= pivot && i < rechts) {
      i++;
    }
    // Suche von rechts ein Element, welches kleiner als das Pivotelement ist
    while(daten[j] >= pivot && j > links) {
      j--;
    }
    if(i < j) { 
      tausche(i,j);
    }
  } while(i < j); // solange i an j nicht vorbeigelaufen ist 
  // Tausche Pivotelement (daten[rechts]) mit neuer endgültiger Position (daten[i])
  if(daten[i] > pivot) { 
    tausche(i,rechts);
  }
  // gib die Position des Pivotelements zurück
  return i;
}





function quicksort(got) {
  if(got.length == 2) { if(got[0] > got[1]) { return [got[1],got[0]]; } else { return got; } }
  while(true) {
    var g = -1; 
    var k = got.length-1; 
    var p = got.length-1;
    var pVal = got[p];
    while(got[++g] <= pVal) {};
    while(got[--k] >= pVal) {};
    if(g <= k) { 
      var temp = got[k];
      got[k] = got[g];
      got[g] = temp;
    } else {
      if(g == got.length) { g = got.length-1; }
      var left = got.slice(0,g);
      if(left.length > 1) { left = quicksort(left); }
      
      if(k == -1) { k = 0; }
      var right = got.slice(g,got.length-1);
      if(right.length > 1) { right = quicksort(right); }
      
      got = left.concat(pVal).concat(right);
      return got;
    }
  }
}