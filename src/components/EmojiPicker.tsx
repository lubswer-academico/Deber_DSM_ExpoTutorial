import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import { PropsWithChildren } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { EPN_THEME } from '@/theme/epnTheme';

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;

export default function EmojiPicker({ isVisible, children, onClose }: Props) {
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Seleccionar Sticker EPN</Text>
              <Pressable
                onPress={onClose}
                style={({ pressed }) => [pressed && { opacity: 0.7 }]}
              >
                <MaterialIcons name="close" color={EPN_THEME.colors.accent} size={22} />
              </Pressable>
            </View>
            {children}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(13, 28, 51, 0.4)',
  },
  modalContent: {
    height: '28%',
    width: '100%',
    backgroundColor: EPN_THEME.colors.surface,
    borderTopRightRadius: EPN_THEME.radius.lg,
    borderTopLeftRadius: EPN_THEME.radius.lg,
    borderTopWidth: 2,
    borderTopColor: EPN_THEME.colors.accent,
  },
  titleContainer: {
    paddingVertical: 14,
    backgroundColor: EPN_THEME.colors.primary,
    borderTopRightRadius: EPN_THEME.radius.lg - 2,
    borderTopLeftRadius: EPN_THEME.radius.lg - 2,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});

