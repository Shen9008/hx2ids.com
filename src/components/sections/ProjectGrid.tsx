import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Building2 } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { projects, type Project, type ProjectCategory } from '@/data/projects';
import { cn } from '@/lib/utils';

type Filter = 'all' | ProjectCategory;

interface ProjectGridProps {
  showFilters?: boolean;
  limit?: number;
  showHeading?: boolean;
}

export function ProjectGrid({ showFilters = true, limit, showHeading = true }: ProjectGridProps) {
  const [filter, setFilter] = useState<Filter>('all');
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter);
  const displayed = limit ? filtered.slice(0, limit) : filtered;

  const filters: { key: Filter; label: string }[] = [
    { key: 'all', label: 'All Projects' },
    { key: 'residential', label: 'Residential' },
    { key: 'commercial', label: 'Commercial' },
  ];

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {showHeading && (
          <Reveal>
            <SectionHeading
              label="Featured Projects"
              title="Spaces We Have Transformed"
              description="Residential and commercial success stories across Malaysia and Singapore."
            />
          </Reveal>
        )}

        {showFilters && (
          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => setFilter(f.key)}
                  className={cn(
                    'relative rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors',
                    filter === f.key ? 'text-beige-50' : 'text-graphite-500 hover:text-graphite-700',
                  )}
                >
                  {filter === f.key && (
                    <motion.span
                      layoutId="project-filter"
                      className="absolute inset-0 rounded-full bg-graphite-600"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{f.label}</span>
                </button>
              ))}
            </div>
          </Reveal>
        )}

        <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {displayed.map((project, i) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.03 }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl"
                onClick={() => setSelected(project)}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-graphite-800/95 via-graphite-800/20 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <Badge variant="dark" className="mb-2">
                    {project.category === 'residential' ? 'Residential' : 'Commercial'}
                  </Badge>
                  <h3 className="font-display text-xl font-medium text-white">{project.name}</h3>
                  <p className="mt-1 flex items-center gap-1 text-sm text-beige-200/70">
                    <MapPin size={12} /> {project.location}
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-end justify-center bg-graphite-800/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-beige-50 p-6 shadow-2xl sm:rounded-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-beige-200 text-graphite-600"
                aria-label="Close"
              >
                <X size={18} />
              </button>
              <img src={selected.image} alt={selected.name} className="aspect-video w-full rounded-2xl object-cover" />
              <Badge className="mt-5">{selected.category === 'residential' ? 'Residential' : 'Commercial'}</Badge>
              <h2 className="mt-3 font-display text-2xl font-medium text-graphite-800">{selected.name}</h2>
              <p className="mt-3 text-graphite-500">{selected.description}</p>
              <div className="mt-5 space-y-2 border-t border-beige-300 pt-5 text-sm">
                <p className="flex items-center gap-2 text-graphite-600"><MapPin size={14} /> {selected.location}</p>
                <p className="flex items-center gap-2 text-graphite-600"><Building2 size={14} /> {selected.type}</p>
                <p className="text-graphite-400">{selected.condition}</p>
              </div>
              <Link to="/contact" className="mt-6 block">
                <Button className="w-full">Enquire About This Project</Button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
