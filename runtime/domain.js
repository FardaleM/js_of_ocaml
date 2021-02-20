//Provides: caml_domain_dls
var caml_domain_dls = [0];

//Provides: caml_domain_dls_set
//Requires: caml_domain_dls
function caml_domain_dls_set(a) {
  caml_domain_dls = a;
}

//Provides: caml_domain_dls_get
//Requires: caml_domain_dls
function caml_domain_dls_get(unit) {
  return caml_domain_dls;
}


//Provides: caml_atomic_load
function caml_atomic_load(ref){
  return ref[1];
}

//Provides: caml_atomic_cas
function caml_atomic_cas(ref,o,n) {
  if(ref[1] === o){
    ref[1] = n;
    return 1;
  }
  return 0;
}

//Provides: caml_atomic_fetch_add
function caml_atomic_fetch_add(ref, i) {
  ref[1] += i;
  return ref[1];
}

//Provides: caml_atomic_exchange
function caml_atomic_exchange(ref, v) {
  var r = ref[1];
  ref[1] = v;
  return r;
}

//Provides: caml_ml_domain_unique_token
var caml_ml_domain_unique_token_ = [0]
function caml_ml_domain_unique_token(unit) {
  return caml_ml_domain_unique_token_
}
