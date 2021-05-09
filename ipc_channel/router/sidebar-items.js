initSidebarItems({"struct":[["ROUTER","Global object wrapping a `RouterProxy`. Add routes (add_route), or convert IpcReceiver to crossbeam channels (e.g. route_ipc_receiver_to_new_crossbeam_receiver)"],["RouterProxy","A `RouterProxy` provides methods for talking to the router. Calling new automatically spins up a router thread which waits for events on its registered `IpcReceiver<T>`s. The `RouterProxy`’s methods communicate with the running router thread to register new `IpcReceiver<T>`’s"]],"type":[["RouterHandler","Function to call when a new event is received from the corresponding receiver."]]});