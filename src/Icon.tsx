import * as React from 'react';
import { View, Text, StyleSheet, ViewProps } from 'react-native';
import * as Icons from './icons';

type IconName = keyof typeof Icons;

interface IconProps extends ViewProps {
  name: IconName;
  width?: number;
  height?: number;
  color?: string;
  badge?: string | number;
  badgeColor?: string;
  variant?: 'outlined' | 'filled';
}

const Icon = ({
  name,
  width = 24,
  height = 24,
  color,
  badge,
  badgeColor = 'red',
  variant = 'outlined',
  style,
  ...rest
}: IconProps) => {
  const outlinedName = variant === 'outlined' ? `${name}Outline` : name;

  const IconComponent = Icons[outlinedName as IconName] || Icons[name as IconName];

  if (!IconComponent) {
    console.warn(`Icon "${name}" (variant: ${variant}) not found in icon set.`);
    return null;
  }

  return (
    <View style={[styles.wrapper, style]} {...rest}>
      <IconComponent width={width} height={height} fill={color} />
      {badge != null && badge !== '' && (
        <View style={[styles.badge, { backgroundColor: badgeColor }]}>
          <Text style={styles.badgeText}>{badge}</Text>
        </View>
      )}
    </View>
  );
};

Icon.displayName = 'Icon';

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center'
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -4,
    borderRadius: 10,
    paddingHorizontal: 4,
    minWidth: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold'
  }
});

export default Icon;
