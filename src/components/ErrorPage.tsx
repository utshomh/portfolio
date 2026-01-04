import { motion } from "framer-motion";
import { Link, useRouteError } from "react-router-dom";
import { Home, RefreshCw, AlertTriangle } from "lucide-react";

const ErrorPage = () => {
  const error = useRouteError() as Error;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg"
      >
        {/* Error Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-24 h-24 mx-auto rounded-full bg-destructive/10 flex items-center justify-center mb-6">
            <AlertTriangle className="w-12 h-12 text-destructive" />
          </div>
        </motion.div>

        {/* Content */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-foreground mb-4"
        >
          Oops! Something went wrong
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-muted-foreground mb-6 leading-relaxed"
        >
          We encountered an unexpected error. Please try refreshing the page or
          go back home.
        </motion.p>

        {error && (
          <motion.details
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mb-8 text-left bg-secondary/50 rounded-lg p-4 text-sm"
          >
            <summary className="cursor-pointer text-foreground font-medium mb-2">
              Error Details
            </summary>
            <pre className="text-muted-foreground whitespace-pre-wrap">
              {error.message}
            </pre>
          </motion.details>
        )}

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => window.location.reload()}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors"
          >
            <RefreshCw className="w-5 h-5" />
            Try Again
          </button>
          <Link
            to="/"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-secondary/50 text-foreground rounded-xl font-medium hover:bg-secondary transition-colors"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
