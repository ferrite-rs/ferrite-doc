(function() {var implementors = {};
implementors["ferrite_session"] = [{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"ferrite_session/internal/base/struct.OpaqueReceiver.html\" title=\"struct ferrite_session::internal::base::OpaqueReceiver\">OpaqueReceiver</a>","synthetic":false,"types":["ferrite_session::internal::base::channel::OpaqueReceiver"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"ferrite_session/internal/base/struct.OpaqueSender.html\" title=\"struct ferrite_session::internal::base::OpaqueSender\">OpaqueSender</a>","synthetic":false,"types":["ferrite_session::internal::base::channel::OpaqueSender"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"ferrite_session/internal/base/struct.IpcSender.html\" title=\"struct ferrite_session::internal::base::IpcSender\">IpcSender</a>&lt;T&gt;","synthetic":false,"types":["ferrite_session::internal::base::channel::IpcSender"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"ferrite_session/internal/base/struct.IpcReceiver.html\" title=\"struct ferrite_session::internal::base::IpcReceiver\">IpcReceiver</a>&lt;T&gt;","synthetic":false,"types":["ferrite_session::internal::base::channel::IpcReceiver"]},{"text":"impl&lt;A&gt; <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"ferrite_session/internal/base/public/struct.SharedChannel.html\" title=\"struct ferrite_session::internal::base::public::SharedChannel\">SharedChannel</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"ferrite_session/internal/base/trait.SharedProtocol.html\" title=\"trait ferrite_session::internal::base::SharedProtocol\">SharedProtocol</a> + <a class=\"trait\" href=\"ferrite_session/internal/base/trait.ForwardChannel.html\" title=\"trait ferrite_session::internal::base::ForwardChannel\">ForwardChannel</a>,&nbsp;</span>","synthetic":false,"types":["ferrite_session::internal::base::shared::SharedChannel"]},{"text":"impl&lt;Row, F&gt; <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"ferrite_session/internal/functional/public/struct.AppSum.html\" title=\"struct ferrite_session::internal::functional::public::AppSum\">AppSum</a>&lt;Row, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"ferrite_session/internal/functional/public/trait.TyCon.html\" title=\"trait ferrite_session::internal::functional::public::TyCon\">TyCon</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Row: <a class=\"trait\" href=\"ferrite_session/internal/functional/public/trait.SumApp.html\" title=\"trait ferrite_session::internal::functional::public::SumApp\">SumApp</a>&lt;F&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Row::<a class=\"type\" href=\"ferrite_session/internal/functional/public/trait.SumApp.html#associatedtype.Applied\" title=\"type ferrite_session::internal::functional::public::SumApp::Applied\">Applied</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static + <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + for&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,&nbsp;</span>","synthetic":false,"types":["ferrite_session::internal::functional::row::structs::AppSum"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"ferrite_session/internal/functional/public/enum.Bottom.html\" title=\"enum ferrite_session::internal::functional::public::Bottom\">Bottom</a>","synthetic":false,"types":["ferrite_session::internal::functional::row::structs::Bottom"]},{"text":"impl&lt;A, B&gt; <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"ferrite_session/internal/functional/public/enum.Sum.html\" title=\"enum ferrite_session::internal::functional::public::Sum\">Sum</a>&lt;A, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["ferrite_session::internal::functional::row::structs::Sum"]},{"text":"impl&lt;F, X, T&gt; <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"ferrite_session/internal/functional/public/struct.App.html\" title=\"struct ferrite_session::internal::functional::public::App\">App</a>&lt;F, X&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;X: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"ferrite_session/internal/functional/public/trait.TypeApp.html\" title=\"trait ferrite_session::internal::functional::public::TypeApp\">TypeApp</a>&lt;X, Applied = T&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + for&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,&nbsp;</span>","synthetic":false,"types":["ferrite_session::internal::functional::type_app::structs::App"]}];
implementors["ipc_channel"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"ipc_channel/ipc/struct.IpcReceiver.html\" title=\"struct ipc_channel::ipc::IpcReceiver\">IpcReceiver</a>&lt;T&gt;","synthetic":false,"types":["ipc_channel::ipc::IpcReceiver"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"ipc_channel/ipc/struct.IpcSender.html\" title=\"struct ipc_channel::ipc::IpcSender\">IpcSender</a>&lt;T&gt;","synthetic":false,"types":["ipc_channel::ipc::IpcSender"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"ipc_channel/ipc/struct.IpcSharedMemory.html\" title=\"struct ipc_channel::ipc::IpcSharedMemory\">IpcSharedMemory</a>","synthetic":false,"types":["ipc_channel::ipc::IpcSharedMemory"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"ipc_channel/ipc/struct.OpaqueIpcSender.html\" title=\"struct ipc_channel::ipc::OpaqueIpcSender\">OpaqueIpcSender</a>","synthetic":false,"types":["ipc_channel::ipc::OpaqueIpcSender"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"ipc_channel/ipc/struct.OpaqueIpcReceiver.html\" title=\"struct ipc_channel::ipc::OpaqueIpcReceiver\">OpaqueIpcReceiver</a>","synthetic":false,"types":["ipc_channel::ipc::OpaqueIpcReceiver"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"ipc_channel/ipc/struct.IpcBytesReceiver.html\" title=\"struct ipc_channel::ipc::IpcBytesReceiver\">IpcBytesReceiver</a>","synthetic":false,"types":["ipc_channel::ipc::IpcBytesReceiver"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"ipc_channel/ipc/struct.IpcBytesSender.html\" title=\"struct ipc_channel::ipc::IpcBytesSender\">IpcBytesSender</a>","synthetic":false,"types":["ipc_channel::ipc::IpcBytesSender"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()