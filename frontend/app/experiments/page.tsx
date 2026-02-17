"use client";

import { useState, useEffect } from "react";
import { PageLayout } from "../community/PageLayout";
import { apiFetch } from "../lib/api";
import LoadingState from "../components/LoadingState";
import ErrorState from "../components/ErrorState";
import BackButton from "../components/BackButton";
import ChartHistogramIcon from "@/components/ui/chart-histogram-icon";

interface Experiment {
  id: number;
  title: string;
  description: string;
  status: "planned" | "in-progress" | "completed";
  statusLabel: "Planned" | "In Progress" | "Completed";
  progress: number;
}

interface BackendExperiment {
  id: number;
  title: string;
  description: string;
  status: string;
  progress?: number;
}

const STATUS_LABELS: Record<Experiment["status"], Experiment["statusLabel"]> = {
  planned: "Planned",
  "in-progress": "In Progress",
  completed: "Completed",
};

const STATUS_PROGRESS: Record<Experiment["status"], number> = {
  planned: 0,
  "in-progress": 50,
  completed: 100,
};

const normalizeStatus = (status: string): Experiment["status"] => {
  const normalized = status.trim().toLowerCase().replace(/[_\s]+/g, "-");

  if (
    normalized === "planned" ||
    normalized === "in-progress" ||
    normalized === "completed"
  ) {
    return normalized;
  }

  return "planned";
};

const normalizeProgress = (
  status: Experiment["status"],
  progress?: number
): number => {
  if (typeof progress === "number" && Number.isFinite(progress)) {
    return Math.max(0, Math.min(100, Math.round(progress)));
  }
  return STATUS_PROGRESS[status];
};

const normalizeExperiment = (exp: BackendExperiment): Experiment => {
  const status = normalizeStatus(exp.status);
  return {
    ...exp,
    status,
    statusLabel: STATUS_LABELS[status],
    progress: normalizeProgress(status, exp.progress),
  };
};

export default function ExperimentsPage() {
  const [experiments, setExperiments] = useState<Experiment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExperiments = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await apiFetch<BackendExperiment[]>("/experiments");
        setExperiments(data.map(normalizeExperiment));
      } catch (err: any) {
        setError(err.message || "Failed to fetch experiments");
      } finally {
        setLoading(false);
      }
    };

    fetchExperiments();
  }, []);

  const getStatusTextColor = (status: string) => {
    if (status === "completed") return "text-green-600 dark:text-green-400";
    if (status === "in-progress") return "text-blue-600 dark:text-blue-400";
    return "text-gray-600 dark:text-gray-400";
  };

  const getProgressColor = (status: string) => {
    if (status === "completed") return "bg-green-500";
    if (status === "in-progress") return "bg-blue-500";
    return "bg-gray-400";
  };

  if (error) {
    return (
      <PageLayout>
        <ErrorState message={error} />
      </PageLayout>
    );
  }

  if (loading) {
    return (
      <PageLayout>
        <LoadingState message="Loading experiments..." />
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="section">
        {/* Header */}
        <div className="mb-8">
          <div className="mb-4">
            <BackButton />
          </div>

          <div className="flex items-center gap-3 mb-3">
            <ChartHistogramIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Experiments
            </h1>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
            Track and manage experiments to test ideas and learn quickly.
          </p>
        </div>

        {experiments.length === 0 ? (
          <div className="card text-center py-16">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
              No experiments yet
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Start your first experiment to test and validate ideas.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {experiments.map((exp) => (
              <div key={exp.id} className="card">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {exp.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {exp.description}
                </p>

                <div className="flex justify-between items-center mb-2">
                  <span
                    className={`text-sm font-medium ${getStatusTextColor(
                      exp.status
                    )}`}
                  >
                    Status: {exp.statusLabel}
                  </span>

                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {exp.progress}%
                  </span>
                </div>

                <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${getProgressColor(
                      exp.status
                    )}`}
                    style={{ width: `${exp.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </PageLayout>
  );
}


