import * as React from "react";
import { toast, ToastBar, Toaster } from "react-hot-toast";
import { XIcon } from "@heroicons/react/outline";

const Toast = () => {
  return (
    <div>
      <Toaster
        reverseOrder={false}
        position="bottom-right"
        toastOptions={{
          style: {
            borderRadius: "8px",
            background: "#fff",
            color: "#333",
          },
        }}
      >
        {(t) => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <>
                {icon}
                {message}
                {t.type !== "loading" && (
                  <button
                    className="rounded-full p-1 ring-primary-400 transition hover:bg-brand-100  branfocus:outline-none focus-visible:ring"
                    onClick={() => toast.dismiss(t.id)}
                  >
                    <XIcon className="w-5 h-5" />
                  </button>
                )}
              </>
            )}
          </ToastBar>
        )}
      </Toaster>
    </div>
  );
};

export default Toast;
