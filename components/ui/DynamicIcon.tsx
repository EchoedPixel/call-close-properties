import {
  Target,
  CalendarCheck,
  Phone,
  Home,
  ClipboardCheck,
  RefreshCw,
  Handshake,
  Building,
  Building2,
  User,
  Users,
  TrendingUp,
  Landmark,
  Gem,
  GraduationCap,
  BarChart3,
  Layers,
  Globe,
  Lock,
  Clock,
  FileCheck,
  Award,
  Mic,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Target,
  CalendarCheck,
  Phone,
  Home,
  ClipboardCheck,
  RefreshCw,
  Handshake,
  Building,
  Building2,
  User,
  Users,
  TrendingUp,
  Landmark,
  Gem,
  GraduationCap,
  BarChart3,
  Layers,
  Globe,
  Lock,
  Clock,
  FileCheck,
  Award,
  Mic,
};

interface DynamicIconProps {
  name: string;
  className?: string;
}

export function DynamicIcon({ name, className = "h-6 w-6" }: DynamicIconProps) {
  const Icon = iconMap[name] || Home;
  return <Icon className={className} />;
}
