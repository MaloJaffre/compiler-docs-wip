initSidebarItems({"fn":[["hash_stable_hashmap",""]],"struct":[["StableHasher","When hashing something that ends up affecting properties like symbol names, we want these symbol names to be calculated independently of other factors like what architecture you're compiling from."],["StableVec","A vector container that makes sure that its items are hashed in a stable order."]],"trait":[["HashStable","Something that implements `HashStable<CTX>` can be hashed in a way that is stable across multiple compilation sessions."],["StableHasherResult",""],["StableHashingContextProvider","Something that can provide a stable hashing context."],["ToStableHashKey","Implement this for types that can be turned into stable keys like, for example, for DefId that can be converted to a DefPathHash. This is used for bringing maps into a predictable order before hashing them."]]});