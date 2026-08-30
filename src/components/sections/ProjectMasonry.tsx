import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Building2 } from 'lucide-react';
import Masonry, { type MasonryItem } from '@/components/ui/Masonry';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { projects, type Project, type ProjectCategory } from '@/data/projects';
import { cn } from '@/lib/utils';

type Filter = 'all' | ProjectCategory;

const heightPattern = [420, 320, 480, 360, 400, 340, 460, 300, 440, 380];

interface ProjectMasonryProps {
  showHeading?: boolean;
  showFilters?: boolean;
  limit?: number;
}

export function ProjectMasonry({ showHeading = true, showFilters = true, limit }: ProjectMasonryProps) {
  const [filter, setFilter] = useState<Filter>('all');
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter);
  const displayed = limit ? filtered.slice(0, limit) : filtered;

  const masonryItems = useMemo<MasonryItem[]>(
    () =>
      displayed.map((project, index) => ({
        id: project.id,
        img: project.image,
        height: heightPattern[index % heightPattern.length],
        title: project.name,
        subtitle: project.location,
      })),
    [displayed],
  );

  const filters: { key: Filter; label: string }[] = [
    { key: 'all', label: 'All Projects' },
    { key: 'residential', label: 'Residential' },
    { key: 'commercial', label: 'Commercial' },
  ];

  const handleItemClick = (item: MasonryItem) => {
    const project = displayed.find((p) => p.id === item.id);
    if (project) setSelected(project);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {showHeading && (
          <Reveal>
            <SectionHeading
              label="Featured Projects"
              title="Spaces We Have Built"
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
                    'relative min-h-[44px] rounded-full px-5 py-3 text-sm font-medium transition-colors',
                    filter === f.key ? 'text-beige-50' : 'text-graphite-500 hover:text-graphite-700',
                  )}
                >
                  {filter === f.key && (
                    <motion.span
                      layoutId="project-masonry-filter"
                      className="absolute inset-0 rounded-full bg-graphite-600"
                      transition={{ type: 'spring', damping: 28, stiffness: 320 }}
                    />
                  )}
                  <span className="relative z-10">{f.label}</span>
                </button>
              ))}
            </div>
          </Reveal>
        )}

        <Reveal delay={0.15}>
          <div className="mt-10">
            <Masonry
              key={filter}
              items={masonryItems}
              animateFrom="bottom"
              blurToFocus
              scaleOnHover
              hoverScale={0.97}
              stagger={0.04}
              onItemClick={handleItemClick}
            />
          </div>
        </Reveal>

        {limit && filtered.length > limit && (
          <div className="mt-10 text-center">
            <Button to="/projects" variant="outline">
              View all projects
            </Button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-modal-backdrop flex items-end justify-center bg-graphite-800/60 p-4 backdrop-blur-sm sm:items-center"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-beige-50 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-graphite-800/80 text-white"
                aria-label="Close"
              >
                <X size={18} />
              </button>
              <img src={selected.image} alt={selected.name} className="aspect-[16/10] w-full object-cover" />
              <div className="p-6 sm:p-8">
                <Badge variant={selected.category === 'residential' ? 'default' : 'dark'}>
                  {selected.category}
                </Badge>
                <h3 className="mt-4 font-display text-2xl font-medium text-graphite-800">{selected.name}</h3>
                <div className="mt-3 flex flex-wrap gap-4 text-sm text-graphite-500">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} /> {selected.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Building2 size={14} /> {selected.type}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-graphite-500">{selected.description}</p>
                <Button to="/contact" className="mt-6 w-full sm:w-auto">
                  Discuss a similar project
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
